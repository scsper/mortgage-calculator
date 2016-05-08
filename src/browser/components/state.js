class State {
    constructor() {
        this.initialLoanAmount = 400000;
        this.termLength = 30 * 12;
        this.monthlyInterestRate = (3.875 / 100) / 12;

        this.bonusPrincipalPayments = {
            1: 1880,
            2: 1880,
            3: 1880,
            4: 1880,
            5: 1880,
            6: 1880,
            7: 1880,
            8: 1880,
            9: 1880,
            10: 1880,
            11: 1880,
            12: 1880,
            13: 1880,
            14: 1880,
            15: 1880,
            16: 1880,
            17: 1880,
            18: 1880,
            19: 1880,
            20: 1880,
            21: 1880,
            22: 1880,
            23: 1880,
            24: 1880,
        };

        this.loanAmount = this.initialLoanAmount;
        this.bonusLoanAmount = this.initialLoanAmount;

        this.payments = [];
    }

    calculatePayment() {
        const dividend = this.initialLoanAmount * (this.monthlyInterestRate * Math.pow(1 + this.monthlyInterestRate, this.termLength));
        const divisor = Math.pow(1 + this.monthlyInterestRate, this.termLength) - 1;

        const payment = dividend / divisor;

        return payment;
    }

    calculateInterestForMonth(loanAmount) {
        return loanAmount * this.monthlyInterestRate;
    }

    getInterestAndPrincipalPayments(loanAmount) {
        const payment = this.calculatePayment();
        const interest = this.calculateInterestForMonth(loanAmount);
        const principal = payment - interest;
        const total = loanAmount - principal;

        return {
            interest,
            principal,
            total
        };
    }

    getPayments() {
        const payments = [];
        const bonusPayments = [];

        this.loanAmount = this.initialLoanAmount;
        this.bonusLoanAmount = this.initialLoanAmount;

        for (let i = 0; i < this.termLength; i++) {
            const payment = this.getInterestAndPrincipalPayments(this.loanAmount);
            const bonusPayment = this.getInterestAndPrincipalPayments(this.bonusLoanAmount);

            payments.push(payment);
            bonusPayments.push(bonusPayment);

            this.loanAmount -= payment.principal;
            this.bonusLoanAmount -= bonusPayment.principal;

            if (this.bonusPrincipalPayments.hasOwnProperty(i)) {
                this.bonusLoanAmount -= this.bonusPrincipalPayments[i];
            }
        }

        return {
            payments,
            bonusPayments
        };
    }
}

export default State;

import React from 'react';
import List from '../lists/Intuit_list';
import State from './state';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const App = React.createClass({
    renderPayments(payments) {
        return payments.map((payment, index) => {
            return (
                <div key={index}>
                    <div>Month: {index + 1}</div>
                    <div>Principal: {Math.floor(payment.principal)}</div>
                    <div>Interest: {Math.ceil(payment.interest)}</div>
                    <div>Total: {Math.ceil(payment.total)}</div>
                    <div>------------------</div>
                </div>
            );
        });
    },

    render() {
        const state = new State();
        const {payments, bonusPayments} = state.getPayments();

        debugger;

        return (
            <div>
                <div>Bonus: {this.renderPayments(bonusPayments)}</div>
                <div>Regular: {this.renderPayments(payments)}</div>
            </div>
        );
    }
});

export default App;

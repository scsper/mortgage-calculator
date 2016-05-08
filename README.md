### Setup

```sh
$ npm install
$ npm install -g gulp
$ npm install -g gulp-cli
$ gulp
```

Visit <http://localhost:3000/>.

Yes, all the dev dependencies are in package.json's dependencies.  This is to make it easy to deploy to Heroku.  It's a side project `¯\_(ツ)_/¯`.

### Setting up deployment
https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

### Deploy

To deploy: `git push heroku master`
To test locally: `heroku local web`
To open production: `heroku open`

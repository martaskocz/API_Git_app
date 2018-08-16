const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 8080;
const app = express();

const clientID = 'c5360afa40e2869bcb91';
const clientSecret = '4a0376a682cfa87253dd9f1eb328b7ecf2da10a0';

passport.use(new GitHubStrategy({
        clientID: "c5360afa40e2869bcb91",
        clientSecret: "4a0376a682cfa87253dd9f1eb328b7ecf2da10a0",
        callbackURL: "http://localhost:8080/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        if (profile) {
            return cb(null, profile);
        }
        else {
            return cb(null, false);
        }
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
const session = require('express-session');
app.use(session({secret: "enter custom sessions secret here"}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/github',
    passport.authenticate('github'));

app.get('/auth/github/callback', (req,res) => {
    /*passport.authenticate('github', {
        //successRedirect: '/auth/github/success',
        failureRedirect: '/login'
    }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/home');*/

    const requestToken = req.query.code;
    axios({
        // make a POST request
        method: 'post',
        // to the Github authentication API, with the client ID, client secret
        // and request token
        url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
        // Set the content type header, so that we get the response in JSOn
        headers: {
            accept: 'application/json'
        }
    }).then((response) => {
        // Once we get the response, extract the access token from
        // the response body
        const accessToken = response.data.access_token;
        // redirect the user to the welcome page, along with the access token
        res.redirect(`/home?access_token=${accessToken}`)
    })
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*',
    (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/webpack/index.html'));
    });

app.listen(port);
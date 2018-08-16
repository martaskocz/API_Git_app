import React from 'react';
import ReactDOM from 'react-dom';
import GitHubLogin from 'react-github-login';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

const url = '/auth/github/callback';
const name = '_self';
const specs = 'width=500,height=500';
function onC() {
    window.open(url, name, specs);
}

const Login = () => {
    return (
    /*<GitHubLogin clientId="c5360afa40e2869bcb91" //my ClientID from GitHub
                 redirectUri="http://localhost:8080/auth/github/callback"
                  //user will be redirected here e.g. http://localhost:8080/users/
                 onSuccess={onSuccess}
                 onFailure={onFailure}
    />*/
    <a href="https://github.com/login/oauth/authorize?client_id=c5360afa40e2869bcb91&redirect_uri=http://localhost:8080/auth/github/callback">Login with github</a>
    );
};

export default Login;
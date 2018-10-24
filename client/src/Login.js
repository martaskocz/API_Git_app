import React from 'react';
import ReactDOM from 'react-dom';
import GitHubLogin from 'react-github-login';
import {withRouter} from 'react-router-dom'

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

const url = '/auth/github/callback';
const name = '_self';
const specs = 'width=500,height=500';
function onC() {
    window.open(url, name, specs);
}

class Login extends React.Component {

    handleSubmit = () => {
        this.props.history.push('/home')
    };
    render(){
    return (
        <a onClick={this.handleSubmit}>Login with github</a>
    )}
};

export default withRouter(Login);
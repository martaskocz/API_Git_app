import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'

class Login extends React.Component {

    handleSubmit = () => {
        this.props.history.push('/home')
    };
    render(){
    return (
        <Button animated='fade' onClick={this.handleSubmit}>
            <Button.Content visible>Login with github</Button.Content>
            <Button.Content hidden>
                <Icon name='github' />
            </Button.Content>
        </Button>
    )}
};

export default withRouter(Login);
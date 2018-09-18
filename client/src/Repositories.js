import React, {Component} from 'react';
import axios from 'axios';

export default class Repositories extends Component {
    constructor (props) {
        super(props);
        this.state = {
            language: ''
        };
    }

    componentDidMount() {
        const query = window.location.search.substring(1);
        const token = query.split('access_token=')[1];
        const url = response.data.public_repos;

        axios.get(url,
            {
                headers: {
                    // Include the token in the Authorization header
                    Authorization: 'token ' + token
                }
            })
            .then(
                response => {
                    console.log(response);
                    this.setState({
                        language: response.data.language
                    });
                }
            );
    }

    render () {
        const language = this.state.language;

        return (
            <div>
                <p>Language is {language}</p>
            </div>
        )
    }
}
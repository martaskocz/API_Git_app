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
        const url = this.props.repos_url;

        axios.get(url,
            {
                headers: {
                    // Include the token in the Authorization header
                    Authorization: 'token ' + token
                }
            })
            /*.then(
                response => {
                    console.log(response);
                    this.setState({
                        language: response.data.language
                    });
                }
            );*/
            .then(response => response.json())
            .then(
                repo => {
                    this.setState({
                        repo: repo
                    });
                }
            );
    }

    render () {
        const result = this.state.repo.map(person => ({ value: person.id, text: person.name }));

        return (
            <li>
                <div>{result}</div>
            </li>
        )
    }
}
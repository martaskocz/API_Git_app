import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Repositories from './Repositories';

/*const Home = () => {
    return (
        <div className="container">
            <h1>WELCOME</h1>
        </div>
    );
};

export default Home;*/

//solution nr 2

/*export default class Home extends Component {

    componentDidMount() {
        const url = '/home';
        window.opener.open(url, '_self');
        window.opener.focus();
        window.close();
    }

    render() {
        return (
            <div>
                AUTH SUCCESS!
            </div>
        );
    }
}*/

//solution nr3
export default class Home extends Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user: '',
            publicrepos: 0,
            showRepos: false,
            repos_url : ''
        };
    }

    componentDidMount() {
        const query = window.location.search.substring(1);
        const token = query.split('access_token=')[1];

        axios.get('//api.github.com/user',
            {
                headers: {
                    // Include the token in the Authorization header
                    Authorization: 'token ' + token
                }
            })
            /*.then(response => this.setState({
                login: response.data.login,
                name: response.data.name
            }))*/
            //.then(response => response.json())
        .then(
            response => {
                // How can we use `this` inside a callback without binding it??
                // Make sure you understand this fundamental difference with arrow functions!!!
                console.log(response);
                this.setState({
                    user: response.data.login,
                    publicrepos: response.data.public_repos,
                    avatar: response.data.avatar_url,
                    repos_url: response.data.repos_url
                });
            }
        );
    }

    handleSubmit() {
        this.setState({
            showRepos: true
        });
    }

    /*renderStat(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    }*/

    render () {
        const user = this.state.user;
        const publicrepos = this.state.publicrepos;
        const avatar = this.state.avatar;
        /*const stat = [
            {
                name: 'Public Repos',
                value: {publicrepos},
                url: `/user/${user}/repos`
            }
        ];*/

        return (
            <div className='button__container'>
                <p>Hello {user}</p>
                <p>You have a {publicrepos} public repositories</p>
                <img src={avatar} alt="" />
                <button onClick={this.handleSubmit}>Show me repos</button>
                {this.state.showRepos ? <Repositories repos_url={this.state.repos_url}/> : null}
            </div>
        )
    }
}

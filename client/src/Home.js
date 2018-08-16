import React, {Component} from 'react';
import axios from 'axios';

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
    constructor () {
        super();
        this.state = {
            username: '',
            repo: ''
        };
    }

    componentDidMount() {
        //axios.get('https://api.github.com/users/martasobstyl')
        //    .then(response => this.setState({username: response.data.name}))
        const query = window.location.search.substring(1);
        const token = query.split('access_token=')[1];

        axios.get('//api.github.com/user',
            {
                headers: {
                    // Include the token in the Authorization header
                    Authorization: 'token ' + token
                }
            })
            .then(res => {console.log(response.data);})
            .then(res => this.setState({username: res.data.name}))
    }

    render () {
        return (
            <div className='button__container'>
                <p>Hello {this.state.username}</p>
            </div>
        )
    }
}

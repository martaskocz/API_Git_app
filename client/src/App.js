import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const Apps = () => (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
    </Switch>
);

class App extends Component {
  render() {
    return (
        <BrowserRouter history={browserHistory}>
          <Apps/>
        </BrowserRouter>
    );
  }
}
//'exact' give us sure that only exact path with be rendered, not like '/...', but just '/'

export default App;
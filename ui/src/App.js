import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import SignIn from './signin/container/signin';
import ExampleApp from './exampleApp';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/example" component={ExampleApp} />
                </Switch>
            </Router>
        );
    }
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/example">Example</Link></li>
                </ul>
            </nav>
        </div>
    );
}

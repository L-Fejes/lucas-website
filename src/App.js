import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { LandingPage } from './views';
import { NavBar } from './components';

const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return(
            <Router history={history}>
                <NavBar />

                <Switch>
                    <Route exact path="/" render={props => <LandingPage />} />
                </Switch>
            </Router>
        );
    }
}

export default App;
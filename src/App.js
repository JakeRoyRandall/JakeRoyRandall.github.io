import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import Projects from './Projects';

class App extends Component {
    render () {
        return (
            <Router>
                <Switch>
                <Route exact path="/"           component={ Homepage } />
                <Route exact path="/Projects"   component={ Projects } />
                </Switch>
            </Router>
        );
    }
}

export default App;
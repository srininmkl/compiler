import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from 'pages/Home';
import Login from 'pages/Login';
import 'App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router basename="auth">
            <Switch>
                <Route path="/login" component={Login} />
                <Route exact component={Home} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

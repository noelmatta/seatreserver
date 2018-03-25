import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return (
      <div>
        <h1>Please log-in</h1>
      </div>
    )
  }
}

class AdminView extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome Administrator</h1>
      </div>
    )
  }
}

class UserView extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome User</h1>
      </div>
    )
  }
}

class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Route path="/" component={Splash} />
            <Link to="/admin">Administrator</Link> 
            <Link to="/user">User</Link>
            <Route path="/admin" component={AdminView} />
            <Route path="/user" component={UserView} />
          </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

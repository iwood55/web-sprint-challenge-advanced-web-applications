import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import {PrivateRoute} from './components/PrivateRoute';
import BubblePage from './components/BubblePage'
;import Login from "./components/Login";
import "./styles.scss";

function App() {
  const logout = () => {
    axios
      .post('http://localhost:5000/api/login')
      .then(res => {
        console.log('Logged out');
        localStorage.removeItem('token');
        window.location.href = '/';
    })
  };
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="/" onClick = {logout}>logout</a>
        </header>
          <PrivateRoute path = '/colors' component = {BubblePage}/>
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
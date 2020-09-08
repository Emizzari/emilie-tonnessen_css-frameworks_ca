import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from './components/home/Home';
import News from './components/news/News';
import Contact from './components/contact/Contact';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function App() {
  return (
    <Router>
      <div>
        <Navbar expand="lg">
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>

              <NavLink to="/news" className="nav-link">
                News
              </NavLink>

              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <ul>
                    <li>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                </ul> */}

        <hr />

        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

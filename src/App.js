import React from 'react';
import "./sass/style.scss";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from './components/home/Home';
import News from './components/news/News';
import Contact from './components/contact/Contact';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function App() {
  return (
    <Router>
      <div>
        <Navbar expand="lg">
          <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
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
          
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      

      
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

      <Card.Footer>
        <div>
          <i className="fab fa-vimeo-v"></i>
          <i className="fab fa-youtube"></i>
        </div>

        <div>
          hello@yay.com
        </div>

        <div>
          Copyright 2020
        </div>
      </Card.Footer>
    </Router>

    
  );
}

export default App;
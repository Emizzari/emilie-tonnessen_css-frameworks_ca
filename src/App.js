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
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <div className="wrapper">



        <Navbar expand="lg" className="nav">
          <Navbar.Brand href="/" className="nav__logo">The YAY Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav__menu-icon"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto nav__menu">
              <NavLink exact to="/" className="nav-link nav__link">
                Home
              </NavLink>

              <NavLink to="/news" className="nav-link nav__link">
                News
              </NavLink>

              <NavLink to="/contact" className="nav-link nav__link">
                Contact
              </NavLink>
            </Nav>
          
            <Form inline>
              <FormControl className="search" type="text" placeholder="Search" className="mr-sm-2" />
              <Button className="search__btn" variant="outline-light">Go</Button>
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





      <Card.Footer className="footer">
        <Container>
          <Row>
            <Col>
              <i className="fab fa-vimeo-v"></i>
              <i className="fab fa-youtube"></i>
            </Col>
            <Col>
              hello@yay.com
            </Col>
            <Col>
              Copyright 2020
            </Col>
          </Row>
        </Container>
      </Card.Footer>





    </Router>

    
  );
}

export default App;
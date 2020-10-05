import React, { useContext } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/Group 1329.png'

const Header = () => {
  const[loggedInUser , setLoggedInUser]= useContext(UserContext);
    return (
        <div className="container mt-3">
            <Navbar bg="light" expand="lg">
  <Link to="/">
      <img src={logo} alt="logo" style={{ width:"200px"}}/>
      </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" style={{marginLeft:'300px'}}>
      <Link className="mr-3 text-dark" to="/home">Home</Link>
      <Link className="mr-3 text-dark" to="/domain">Domain</Link>
      <Link className="mr-3 text-dark" to="/events">Events</Link>
      <Link className="mr-3 text-dark" to="/blog">Blog</Link>
      <h6 className="">{loggedInUser.name}</h6>
    </Nav>
    
    <Form>
      <Link to="/register"><Button variant="info" className="mr-3 pr-4 pl-4 pt-2 pb-2">Register</Button></Link>
      <Link to="/admin-panel/registerList"><Button variant="dark" className="pr-4 pl-4 pt-2 pb-2">Admin</Button></Link>
      
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;
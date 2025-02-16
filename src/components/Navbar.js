import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Navbar.Brand as={Link} to="/">CJStreetwear</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/all-products">All Products</Nav.Link>
                    <Nav.Link as={Link} to="/category/1">Category 1</Nav.Link>
                    <Nav.Link as={Link} to="/category/2">Category 2</Nav.Link>
                    <Nav.Link as={Link} to="/category/3">Category 3</Nav.Link>
                    <Nav.Link as={Link} to="/category/4">Category 4</Nav.Link>
                    <Nav.Link as={Link} to="/category/5">Category 5</Nav.Link>
                    <Nav.Link as={Link} to="/basket">Basket</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                <Form inline className="ml-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-light py-4 mt-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>CJStreetwear</h5>
                        <p>© 2023 CJStreetwear. All rights reserved.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/all-products">All Products</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>Email: info@cjstreetwear.com</p>
                        <p>Phone: +123 456 7890</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

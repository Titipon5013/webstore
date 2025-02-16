import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="col-md-4 mb-4">
            <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={product.image} />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="flex-grow-1">${product.price.toFixed(2)}</Card.Text>
                    <Button as={Link} to={`/product-detail?product=${product.id}`} variant="primary">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;

import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const HomePage = () => {
    const highlightedProducts = [
        { id: 1, name: 'Highlighted Product 1', price: 29.99, image: 'images/highlighted1.jpg' },
        // ...more highlighted products...
    ];

    return (
        <div>
            <Carousel>
                {highlightedProducts.map(product => (
                    <Carousel.Item key={product.id}>
                        <img className="d-block w-100" src={product.image} alt={product.name} />
                        <Carousel.Caption>
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Container className="mt-4">
                <h2>Highlighted Products</h2>
                <Row>
                    {highlightedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default HomePage;

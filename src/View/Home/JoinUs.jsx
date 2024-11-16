import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';  // Importing required components from React Bootstrap
import styles from './CSS/Home.module.css';  // Your custom CSS

function Join() {
    return (
        <section className={styles['join']}>
            <Container>
                <h1 className="mt-4 mb-4 text-center">Join Us</h1>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        <p className="mt-4 mb-4">
                            We're on a mission to end food waste, and we need your help to do it. Whether you're a hospital or restaurant looking to reduce your food waste or a passionate individual looking to make a difference, we'd love to hear from you. Get in touch with us today to learn more about our system and how we can help you track, reduce, and report your food waste.
                        </p>
                        <Button variant="primary" className="mb-4 w-100">Get in touch</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Join;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';  // Importing required components from React Bootstrap
import styles from './CSS/Home.module.css';  // Your custom CSS
import { useTranslation } from 'react-i18next';
function Join() {
    const { i18n } = useTranslation(); 
    return (
        <section className={styles['join']}>
            <Container>
                <h1 className="mt-4 mb-4 text-center">{i18n.t('join')}</h1>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        <p className="mt-4 mb-4">
                         {i18n.t('join_text')}
                        </p>
                        <Button variant="primary" className="mb-4 w-100">{i18n.t('touch')}</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Join;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';  // Importing React Bootstrap grid components
import styles from './CSS/Home.module.css';  // Your custom CSS
import Card from '../../Components/Card/Card';  // Assuming you have a custom Card component

function KeyFeatures() {
  return (
    <section className={styles['Features']}>
      <Container>
        <h3 className="mt-4 text-center">What you get with Waste Track?</h3>

        <Row className="g-4 mt-4">
          <Col xs={12} md={6} lg={3}>
            <Card
              title="Real-time insights"
              description="Track food waste as it happens"
              className="custom-card"
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card
              title="Data-driven recommendations"
              description="AI-powered insights that help you reduce waste"
              className="custom-card"
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card
              title="Reduce food waste"
              description="Save up to 6% on food costs"
              className="custom-card"
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card
              title="Uncover inefficiencies"
              description="Optimize inventory and purchasing"
              className="custom-card"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default KeyFeatures;

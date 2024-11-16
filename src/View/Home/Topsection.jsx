import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';  // Importing React Bootstrap components
import styles from './CSS/Home.module.css';  // Your custom CSS
import Global from '../../assets/Images/Global.png';  // Assuming the image path

function Home() {
  return (
    <section className={styles['Home-section']}>
      <Container>
        <Row className="align-items-center">
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <h1 className={styles['Main-title']}>Tracking Food Waste System</h1>
            <p className={styles['Main-text']}>
              Empowering organizations to contribute to building a sustainable food system for everyone.
            </p>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <img src={Global} alt="Global" className="w-75" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;

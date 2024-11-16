import styles from './CSS/Home.module.css';
import React from 'react';
import { Row, Col, Card,Container } from 'react-bootstrap'; 
import Hospitals from '../../assets/Images/homeicon.svg';
import Hotel from '../../assets/Images/hotelicon.svg';
import Company from '../../assets/Images/componyicon.svg';
import Food from '../../assets/Images/foodicon.svg';



const ServicesSection = () => {
  return (
    <section className={styles['about']}>
     <Container>
        <h1 className="mt-4 mb-4 text-center">Our Services</h1>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Col>
            <Card className="custom-card">
              <Card.Img variant="top" src={Hospitals} />
              <Card.Body>
                <Card.Title>Residential</Card.Title>
                <Card.Text>
                  Weekly pickup service for your home or apartment
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="custom-card">
              <Card.Img variant="top" src={Hotel} />
              <Card.Body>
                <Card.Title>Hotels</Card.Title>
                <Card.Text>
                  Customized pickup service for your business
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="custom-card">
              <Card.Img variant="top" src={Company} />
              <Card.Body>
                <Card.Title>Commercial</Card.Title>
                <Card.Text>
                  Customized pickup service for your business
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="custom-card">
              <Card.Img variant="top" src={Food} />
              <Card.Body>
                <Card.Title>Uncover inefficiencies</Card.Title>
                <Card.Text>
                  Optimize inventory and purchasing
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;


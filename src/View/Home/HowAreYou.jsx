import styles from './CSS/Home.module.css';
import React from 'react';
import { Row, Col, Card,Container } from 'react-bootstrap'; 
import Hospitals from '../../assets/Images/homeicon.svg';
import Hotel from '../../assets/Images/hotelicon.svg';
import Company from '../../assets/Images/componyicon.svg';
import { useTranslation } from 'react-i18next';


const ServicesSection = () => {
  const { i18n } = useTranslation(); 
  return (
    <section className={styles['about']}>
     <Container>
        <h1 className="mt-4 mb-4 text-center">{i18n.t('service')}</h1>
        <Row xs={1} md={2} lg={4} className="g-4 justify-content-center m-auto">
          <Col>
            <Card className="custom-card">
              <Card.Img variant="top" src={Hospitals} />
              <Card.Body>
                <Card.Title className='text-center"'>{i18n.t('homeone')}</Card.Title>
                <Card.Text className='text-center"'>
                {i18n.t('hometext')}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="custom-card">
              <Card.Img variant="top" src={Hotel} />
              <Card.Body>
                <Card.Title className='text-center"'>{i18n.t('hotel')}</Card.Title>
                <Card.Text className='text-center"'>
                {i18n.t('hoteltext')}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="custom-card">
              <Card.Img variant="top" src={Company} />
              <Card.Body>
                <Card.Title className='text-center"'>  {i18n.t('comm')}</Card.Title>
                <Card.Text className='text-center"'>
                {i18n.t('hoteltext')}
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


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';  
import styles from './CSS/Home.module.css'; 
import Card from '../../Components/Card/Card';  
import { useTranslation } from 'react-i18next';
function KeyFeatures() {
  const { i18n } = useTranslation(); 

 ;

  return (
    <section className={styles['Features']}>
      <Container>
        <h3 className="mt-4 text-center">{i18n.t('what')}</h3>

        <Row className="g-4 mt-4">
          <Col xs={12} md={6} lg={3}>
            <Card
              title={i18n.t('real')}
              description={i18n.t('track')}
              className="custom-card"
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card
              title={i18n.t('reco')}
              description={i18n.t('recoone')}
              className="custom-card"
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card
              title={i18n.t('reduce')}
              description={i18n.t('reduceone')}
              className="custom-card"
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Card
              title={i18n.t('uncover')}
              description={i18n.t('uncoverone')}
              className="custom-card"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default KeyFeatures;

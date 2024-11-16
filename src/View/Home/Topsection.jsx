import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';  // Importing React Bootstrap components
import styles from './CSS/Home.module.css';  // Your custom CSS
import Global from '../../assets/Images/Global.png';  // Assuming the image path
import { useTranslation } from 'react-i18next';
function Home() {
  const { i18n } = useTranslation(); 
  return (
    <section className={styles['Home-section']}>
      <Container>
        <Row className="align-items-center">
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <h1 className={styles['Main-title']}>{i18n.t('main')}</h1>
            <p className={styles['Main-text']}>
             {i18n.t('text')}
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

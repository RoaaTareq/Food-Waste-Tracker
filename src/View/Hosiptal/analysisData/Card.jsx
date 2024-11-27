import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Import PropTypes

// Reusable Card Component
const CardItem = ({ title, count, id }) => {
  return (
    <Col md={4}>
      <Card id='card-border'>
        <Card.Body>
          <Card.Title>{`${title}-(${count})`}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

// PropTypes Validation
CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

const CardRow = () => {
  // Card data with unique ids
  const cardData = [
    { id: 'category', title: 'Number of Category', count: 112 },
    { id: 'hospital', title: 'Number of Hospital', count: 4 },
    { id: 'employee', title: 'Number of Employee', count: 2 },
  ];

  return (
    <Row className="g-4 pt-4">
      {cardData.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </Row>
  );
};

export default CardRow;

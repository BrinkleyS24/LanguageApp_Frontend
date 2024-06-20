import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Exercises.css';

const mockExercises = [
  {
    title: 'Spanish Vocabulary Quiz',
    description: 'Test your knowledge of basic Spanish words and phrases.',
  },
  {
    title: 'French Grammar Exercises',
    description: 'Practice French grammar with these exercises.',
  },
  {
    title: 'German Listening Practice',
    description: 'Improve your German listening skills with these audio exercises.',
  },
];

const Exercises = () => {
  return (
    <Container className="my-5">
      <Row>
        {mockExercises.map((exercise, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{exercise.title}</Card.Title>
                <Card.Text>{exercise.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Exercises;

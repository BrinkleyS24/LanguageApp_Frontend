import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Lessons.css';

const mockLessons = [
  {
    title: 'Introduction to Spanish',
    description: 'Learn the basics of Spanish including common phrases and pronunciation.',
  },
  {
    title: 'French for Beginners',
    description: 'Start your journey in French with basic grammar and vocabulary.',
  },
  {
    title: 'German Essentials',
    description: 'Discover essential German phrases and grammar rules.',
  },
];

const Lessons = () => {
  return (
    <Container className="my-5">
      <Row>
        {mockLessons.map((lesson, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{lesson.title}</Card.Title>
                <Card.Text>{lesson.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Lessons;

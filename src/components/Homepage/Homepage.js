import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <Container fluid className="p-0">
      <div className="hero bg-primary text-white text-center d-flex align-items-center">
        <Container>
          <div className="hero-text">
            <h1 className="display-4">Welcome to Our Tower of Babel</h1>
            <p className="lead">Easily translate text between various languages.</p>
          </div>
          <Link to={"/translate"}>
            <Button variant="dark" size="lg" href="#features">Learn More</Button>
          </Link>
        </Container>
      </div>

      <Container className="my-5">
        <Row id="features" className="text-center">
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Easy to Use</Card.Title>
                <Card.Text>
                  Our interface is designed to be intuitive and user-friendly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Accurate Translations</Card.Title>
                <Card.Text>
                  Get accurate translations powered by advanced language models.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Learn on the Go</Card.Title>
                <Card.Text>
                  We support a wide range of languages to cater to your needs. Learn them through coordinated exercies and lessons catered to you!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2024 Translation Service. All Rights Reserved.</p>
      </footer>
    </Container>
  );
};

export default Homepage;

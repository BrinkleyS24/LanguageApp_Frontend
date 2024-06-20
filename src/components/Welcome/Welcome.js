import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Welcome.css';

const styles = {
  ImageContainer: {
    width: '227px',
    height: '200px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  TextLarge: {
    color: '#030303',
    fontSize: '34px',
    fontFamily: 'Montserrat',
    fontWeight: 800,
    lineHeight: '48px',
    textAlign: 'center',
  },
  TextSmall: {
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Montserrat',
    lineHeight: '24px',
    textAlign: 'center',
  },
  Button: {
    cursor: 'pointer',
    width: '335px',
    height: '48px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#8bf80a',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Montserrat',
    fontWeight: 600,
    lineHeight: '22px',
    outline: 'none',
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/fabdf2be-22b7-437a-889e-763433ee4b78.png',
  textLarge: 'LingoLearn',
  textSmall: 'Explore new languages with ease',
  buttonLabel: 'Start learning',
};

const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

const TextLarge = (props) => {
  return (
    <div style={styles.TextLarge}>
      {props.text ?? defaultProps.textLarge}
    </div>
  );
};

const TextSmall = (props) => {
  return (
    <div style={styles.TextSmall}>
      {props.text ?? defaultProps.textSmall}
    </div>
  );
};

const CustomButton = (props) => {
  return (
    <Button style={styles.Button}>
      {props.label ?? defaultProps.buttonLabel}
    </Button>
  );
};

const Welcome = () => {
  return (
    <Container fluid className="p-0 homepage-container">
      <Row className="d-flex justify-content-center mt-5">
        <Image />
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <TextLarge />
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <TextSmall />
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <Link to="/home">
          <CustomButton />
        </Link>
      </Row>
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
                  We support a wide range of languages to cater to your needs. Learn them through coordinated exercises and lessons catered to you!
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

export default Welcome;

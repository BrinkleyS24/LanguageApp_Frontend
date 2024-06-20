import React from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import './Home.css';
import TranslateText from '../Translate/TranslateText';
import Lessons from '../Lessons/Lessons';
import Exercises from '../Exercises/Exercises';

const Home = () => {
  return (
    <Container className="my-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="exercises">
        <Nav variant="pills" className="flex-column flex-sm-row">
          <Nav.Item>
            <Nav.Link eventKey="exercises">Exercises</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="lessons">Lessons</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="translator">Translator</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="mt-3">
          <Tab.Pane eventKey="exercises">
            <Exercises />
          </Tab.Pane>
          <Tab.Pane eventKey="lessons">
            <Lessons />
          </Tab.Pane>
          <Tab.Pane eventKey="translator">
            <TranslateText />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default Home;

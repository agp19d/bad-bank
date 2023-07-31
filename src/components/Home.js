/**
 * @author Alejandro Garcia de Paredes
 * @created July 27, 2023
 * @modified July 31, 2023
 **/

import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Card className="text-center mt-4">
        <Card.Body>
          <Card.Title><h1>Welcome to Bad Bank</h1></Card.Title>
          <Card.Text>
            Your trusted partner in personal finance. Join us today and take control of your financial future.
          </Card.Text>
        </Card.Body>
      </Card>

      <Row className="my-4">
        <Col>
          <h2>Our Services</h2>
          <p>
            We offer a wide range of banking services including deposits, withdrawals, and more. We're committed
            to providing you with the tools you need to manage your money.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <h3>Deposits</h3>
          <p>Conveniently deposit funds anytime, anywhere.</p>
        </Col>
        <Col md={4}>
          <h3>Withdrawals</h3>
          <p>Access your money when you need it, with multiple withdrawal options.</p>
        </Col>
        <Col md={4}>
          <h3>Balance Tracking</h3>
          <p>Keep track of your financial progress with easy balance monitoring.</p>
        </Col>
      </Row>

      <footer className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Bad Bank. All rights reserved.</p>
      </footer>
    </Container>
  );
}

export default Home;

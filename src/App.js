
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



import { Navbar, Nav, Button, Container, Form, Card, NavLink } from 'react-bootstrap';
import Test from './components/Test';


function LoginForm() {
  return (
    <Card className="card-box" style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title className='card-title mb-3'>Login</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="agree privacy & policy" />
          </Form.Group>
          <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">
          <Button className="submit-button" variant="btn btn-primary btn-block" type="submit">
            Submit
          </Button>
          </a>
          


        </Form>

      </Card.Body>
    </Card>
  )
}
function App() {
  return (
    <div className="App">

      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Test Exam</Navbar.Brand>
            <Nav className="me-right">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#help">Help</Nav.Link>
              <NavLink to={'/test'}>Feedback</NavLink>
            </Nav>
          </Container>
        </Navbar>

        <Test/>
        
        <br />
        <br />
        <br />
        <Router>

        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/test">
           <Test/>
          </Route>
        </Switch>
        </Router>

      </>


    </div>
  );
}

export default App;

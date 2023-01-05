import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function App() {
  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4>Fill the Form Details</h4>
      <Form>
      <Form.Group>
          <Form.Label>Enter your  name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email Id</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        <Button variant="primary" type="submit" className='margintop'>
           Submit
        </Button>
      </Form>
    </div>
  );
}

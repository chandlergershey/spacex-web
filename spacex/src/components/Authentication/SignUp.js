import React from 'react'
import {Form, Button} from 'react-bootstrap';
import './Authentication.scss';

function SignUp() {
  return (
    <div className="authentication-container">
      <Form>
        <Form.Group controlId="formBasicUsername">
          <h1 className='authentication-text'>Create a new account</h1>
          <Form.Label className='authentication-text'>Username</Form.Label>
          <Form.Control type="email" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className='authentication-text'>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your Password" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className='authentication-text'>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        
        <Form.Group>
          <Button variant="outline-light" type="submit">
            CREATE ACCOUNT
          </Button>
        </Form.Group>

        <Form.Group controlId="formCreateAccount">
          <Form.Text className='authentication-text'>
            Have an account?
            
          </Form.Text>
          <Button variant="outline-light">
              Sign in
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignUp

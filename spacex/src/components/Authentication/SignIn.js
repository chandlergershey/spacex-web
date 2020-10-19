import React from 'react'
import {Form, Button} from 'react-bootstrap';
import './Authentication.scss';

function SignIn() {
  return (
    <div className="authentication-container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <h1 className='authentication-text'>Sign in to your account</h1>
          <Form.Label className='authentication-text'>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className='authentication-text'>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your Password" />
        </Form.Group>
        
        <Form.Group>
          <Button variant="light" type="submit">
            SIGN IN
          </Button>
        </Form.Group>

        <Form.Group controlId="formCreateAccount">
          <Form.Text className='authentication-text'>
            No account?
            
          </Form.Text>
          <Button variant="outline-light">
              Create account
            </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignIn

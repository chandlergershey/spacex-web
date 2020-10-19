import React, {useState, useEffect} from 'react';
import {Auth, Hub} from 'aws-amplify';
import '../App.scss';
import Launches from './Launches';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/Authentication/SignIn';
import CreateAccountForm from '../components/Authentication/SignUp';
import {Form, Button} from 'react-bootstrap';
// import './Authentication.scss';
import '../components/Authentication/Authentication.scss'

import LandingPage from '../pages/LandingPage';

const initialFormState = {
  username: '', password: '', email: '', authCode: '', formType: 'signUp'
}

function MyAuth() {
  const [formState, updateFormState] = useState(initialFormState);
  const [user, updateUser] = useState(null)

  useEffect(()=> {
    checkUser()
    setAuthListener()
  }, [])

  async function setAuthListener() {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signOut':
          console.log('user signed out');
          updateFormState(() => ({...formState, formType: "landingPage"}));
          break;
        default:
          break;
      }
    });
  }

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log('user: ', user);
      updateUser(user);
      updateFormState(() => ({...formState, formType: "signedIn" }));
    } catch (err) {
      updateUser(null);
    }
  }

  function onChange(e) {
    e.persist();
    updateFormState(() => ({...formState, [e.target.name]: e.target.value}));
  }
  const { formType } = formState

  async function signUp() {
    try {
      const {username, email, password} = formState;
      await Auth.signUp({ username, password, attributes: {email}});
      updateFormState(() => ({ ...formState, formType: "confirmSignUp" }));
    } catch {
      alert("Error signing up. Please try again.");
    }
    
  }

  async function confirmSignUp() {
    try {
      const {username, authCode} = formState;
      await Auth.confirmSignUp(username, authCode);
      updateFormState(() => ({ ...formState, formType: "signIn" }));
    } catch {
      alert('Error confirming sign up. Please try again.');
    }
    
  }

  async function signIn() {
    try {
      const {username, password} = formState;
      await Auth.signIn(username, password);
      updateFormState(() => ({ ...formState, formType: "signedIn" }));
    } catch {
      alert('Error signing in. Please try again.');
    }
    
  }

  return (
    
      <div className="authentication_page_container">
        {
          formType==='landingPage' && (
            <div>
              <h1>Landing Page</h1>
              <button onClick={() => updateFormState(() => ({
                ...formState, formType: "signUp"
              }))}>Enter Site</button>
              
            </div>
            // <LandingPage />
            
          )
        }
        {
          formType==='signUp' && (
            // <div>
            //   <input name="username" onChange={onChange} placeholder="username" />
            //   <input name="password" type="password" onChange={onChange} placeholder="password" />
            //   <input name="email" onChange={onChange} placeholder="email" />
            //   <button onClick={signUp}>Sign Up</button>
            //   <button onClick={() => updateFormState(() => ({
            //     ...formState, formType: "signIn"
            //   }))}>Sign In</button>
            // </div>
            // <CreateAccountForm />

            <div className="authentication-container">
              <h1 className='authentication-text authentication_headline'>Create a new account</h1>
              <div>
                <h6 className='authentication-text'>Username</h6>
                <input className='authentication-input' name="username" onChange={onChange} placeholder="username" />
              </div>

              <div>
                <h6 className='authentication-text'>Password</h6>
                <input className='authentication-input' name="password" type="password" onChange={onChange} placeholder="password" />
              </div>

              <div>
                <h6 className='authentication-text'>Email Address</h6>
                <input className='authentication-input' name="email" onChange={onChange} placeholder="email" />
              </div>
              
              <Button onClick={signUp} variant="outline-light">Sign Up</Button>
              <h6 className='authentication-text extra_auth_features'>Have an account? <button className="auth_no_format_button" onClick={() => updateFormState(() => ({
                ...formState, formType: "signIn"
              }))}>Sign In</button></h6>

            </div>
          )
        }
        {
          formType==='confirmSignUp' && (
            // <div>
            //   <input name="" onChange={onChange} placeholder="username" />
            //   <input name="authCode" onChange={onChange} placeholder="Confirmation code" />
            //   <button onClick={confirmSignUp}>Confirm Sign Up</button>
            // </div>

            <div className="authentication-container">
              <h1 className='authentication-text authentication_headline'>Confirm Sign Up</h1>
              <div>
                <h6 className='authentication-text'>Username</h6>
                <input className='authentication-input' name="username" onChange={onChange} placeholder="Enter your username" />
              </div>

              <div>
                <h6 className='authentication-text'>Confirmation Code</h6>
                <input className='authentication-input' name="authCode" onChange={onChange} placeholder="Enter your code" />
              </div>
              
              <Button onClick={confirmSignUp} variant="outline-light">CONFIRM</Button>
              <h6 className='authentication-text extra_auth_features'><button className="auth_no_format_button" onClick={() => updateFormState(() => ({
                ...formState, formType: "signIn"
              }))}>Back to Sign In</button></h6>

            </div>
            

          )
        }
        {
          formType==='signIn' && (
            // <SignUpForm />
            // <div>
            //   <input name="username" onChange={onChange} placeholder="username" />
            //   <input name="password" type="password" onChange={onChange} placeholder="password" />
            //   <button onClick={signIn}>Sign In</button>
            // </div>
            
            <div className="authentication-container">
              <h1 className='authentication-text authentication_headline'>Sign in to your account</h1>
              <div>
                <h6 className='authentication-text'>Username</h6>
                <input className='authentication-input' name="username" onChange={onChange} placeholder="Enter your username" />
              </div>

              <div>
                <h6 className='authentication-text'>Password</h6>
                <input className='authentication-input' name="password" type="password" onChange={onChange} placeholder="Enter your password" />
              </div>
              
              <Button onClick={signIn} variant="outline-light">SIGN IN</Button>
              <h6 className='authentication-text extra_auth_features'>No account? <button className="auth_no_format_button" onClick={() => updateFormState(() => ({
                ...formState, formType: "signUp"
              }))}>Create account</button></h6>

            </div>
            
          )
        }
        {
          formType==='signedIn' && (
            <div>
              <Launches/>
              <Link to='/'>
                <button onClick={
                  () => Auth.signOut()
                }>Sign Out</button>
              </Link>
              
            </div>
          )
        }
      </div>
      

  )
}

export default MyAuth;

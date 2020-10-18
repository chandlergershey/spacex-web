import React, {useState, useEffect} from 'react';
import {Auth, Hub} from 'aws-amplify';
import '../App.scss';
import Launches from './Launches';
import { Link } from 'react-router-dom';

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
      const user = await Auth.currentAuthenticatedUser()
      console.log('user: ', user)
      updateUser(user)
      updateFormState(() => ({...formState, formType: "signedIn" }))
    } catch (err) {
      updateUser(null)
    }
  }

  function onChange(e) {
    e.persist();
    updateFormState(() => ({...formState, [e.target.name]: e.target.value}));
  }
  const { formType } = formState

  async function signUp() {
    const {username, email, password} = formState
    await Auth.signUp({ username, password, attributes: {email}})
    updateFormState(() => ({ ...formState, formType: "confirmSignUp" }))
  }

  async function confirmSignUp() {
    const {username, authCode} = formState
    await Auth.confirmSignUp(username, authCode)
    updateFormState(() => ({ ...formState, formType: "signIn" }))
  }

  async function signIn() {
    const {username, password} = formState
    await Auth.signIn(username, password)
    updateFormState(() => ({ ...formState, formType: "signedIn" }))
  }

  return (
    <div className="fullscreen">
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
          <div>
            <input name="username" onChange={onChange} placeholder="username" />
            <input name="password" type="password" onChange={onChange} placeholder="password" />
            <input name="email" onChange={onChange} placeholder="email" />
            <button onClick={signUp}>Sign Up</button>
            <button onClick={() => updateFormState(() => ({
              ...formState, formType: "signIn"
            }))}>Sign In</button>
          </div>
        )
      }
      {
        formType==='confirmSignUp' && (
          <div>
            <input name="" onChange={onChange} placeholder="username" />
            <input name="authCode" onChange={onChange} placeholder="Confirmation code" />
            <button onClick={confirmSignUp}>Confirm Sign Up</button>
          </div>
        )
      }
      {
        formType==='signIn' && (
          <div>
            <input name="username" onChange={onChange} placeholder="username" />
            <input name="password" type="password" onChange={onChange} placeholder="password" />
            <button onClick={signIn}>Sign In</button>
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

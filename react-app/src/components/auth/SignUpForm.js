import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './auth.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    if (password !== repeatPassword) {
      setErrors(["Error confirmPassword: Password and confirm password do not match"])
    }

    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-container'>
      <h1>Sign Up for <span style={{"font-family": "Gothic G Regular"}}>Grimoire</span>!</h1>
      <form onSubmit={onSignUp} className='signup-form'>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={updateUsername}
            value={username}
            required
          ></input>
        </div>
        <div>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={updateEmail}
            value={email}
            required
          ></input>
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={updatePassword}
            value={password}
            required
          ></input>
        </div>
        <div>
          <input
            type='password'
            name='repeat_password'
            placeholder='Confirm Password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button className="signup-submit-button" type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './auth.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [lengthErrors, setLengthErrors] = useState({})
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/
      );
  };

  // const validateEmail = (email) => {
  //   if (!email.includes('@')) {
  //     return false
  //   }

  //   if (email.split('@').length > 2) {
  //     return false
  //   }

  //   if (!email.includes('.com') || !email.includes('.io') || !email.includes('.net')) {
  //     return false
  //   }
  // }

  const onSignUp = async (e) => {
    e.preventDefault();

    const newErrors = []
    if (password !== repeatPassword) {
      newErrors.push("Password and confirm password do not match!")
    }

    if (!validateEmail(email)) {
      newErrors.push("Please enter a valid email!")
    }

    if (newErrors.length > 0) {
      setErrors(newErrors)
      return
    } else {
      setErrors([])
    }

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  useEffect(() => {
    const newErrors = {}

    if (username.length >= 25) {
      newErrors.username = "Name character limit reached (25)"
    }
    if (email.length >= 50) {
      newErrors.email = "Email character limit reached (50)"
    }
    if (password.length >= 25) {
      newErrors.password = "Password character limit reached (25)"
    }
    if (repeatPassword.length >= 25) {
      newErrors.repeatPassword = "Confirm Password character limit reached (25)"
    }

    if (Object.values(newErrors).length > 0) {
      setLengthErrors(newErrors)
    } else {
      setLengthErrors({})
    }
  }, [username, email, repeatPassword, password])

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
            minLength="4"
            maxLength="25"
            required
          ></input>
        </div>
        {lengthErrors.username && <div>{lengthErrors.username}</div>}
        <div>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={updateEmail}
            value={email}
            maxLength="50"
            required
          ></input>
        </div>
        {lengthErrors.email && <div>{lengthErrors.email}</div>}
        <div>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={updatePassword}
            value={password}
            minLength="4"
            maxLength="25"
            required
          ></input>
        </div>
        {lengthErrors.password && <div>{lengthErrors.password}</div>}
        <div>
          <input
            type='password'
            name='repeat_password'
            placeholder='Confirm Password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            minLength="4"
            maxLength="25"
            required
          ></input>
        </div>
        {lengthErrors.repeatPassword && <div>{lengthErrors.repeatPassword}</div>}
        <button className="signup-submit-button" type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

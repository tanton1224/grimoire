
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { demoLogin } from '../store/session';
import LoginFormModal from './auth/LoginFormModal';
import LogoutButton from './auth/LogoutButton';
import SignUpFormModal from './auth/SignUpFormModal';
import CreateDeckFormModal from './CreateDeckFormModal';
import CreateSpellcardModal from './CreateSpellcardModal';
import './NavBar.css'

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [ showMenu, setShowMenu ] = useState(false)

  return (
    <nav className='nav-bar-container'>
      <div className='nav-logo'>
        <NavLink to='/' exact={true}>Grimoire</NavLink>
      </div>
      <div className='nav-options-section'>
        <div className='nav-option'>
          <NavLink to='/encyclopedia' exact={true}>Encyclopedia</NavLink>
        </div>
        {user ? (<>
          <div className='nav-option'>
            <CreateDeckFormModal />
          </div>
          <div className='nav-option'>
            <CreateSpellcardModal />
          </div>
          <div className='nav-option-profile' id="user" onClick={() => setShowMenu(!showMenu)}>
            <i className='fa-solid fa-circle-user fa-2xl'></i>
          </div>
          {showMenu &&
          (<div className='dropdown-options'>
            <div className='dropdown-option'>Welcome, {user.username}!</div>
            <div className='dropdown-option active'>
              <NavLink style={{"color": "#25100B"}} to='/profile/decks' onClick={() => setShowMenu(false)}>Your Decks</NavLink>
            </div>
            <div className='dropdown-option active'>
              <NavLink style={{"color": "#25100B"}} to='/profile/spellcards' onClick={() => setShowMenu(false)}>Your Homebrew Spellcards</NavLink>
            </div>
            <LogoutButton onClick={() => setShowMenu(false)}/>
          </div>)}
        </>) : (
          <>
          <div className='demo-login-button' onClick={() => dispatch(demoLogin())}>Demo Login</div>
          <LoginFormModal />
          <SignUpFormModal />
          </>
        )}
      </div>
      {/* <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/encyclopedia' exact={true} activeClassName='active'>
            Encyclopedia
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile/decks' exact={true} activeClassName='active'>
            Your Decks
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile/spellcards' exact={true} activeClassName='active'>
            Your Spellcards
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <CreateDeckFormModal />
        </li>
        <li>
          <CreateSpellcardModal />
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul> */}
    </nav>
  );
}

export default NavBar;

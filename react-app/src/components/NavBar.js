
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { demoLogin } from '../store/session';
import LogoutButton from './auth/LogoutButton';
import CreateDeckFormModal from './CreateDeckFormModal';
import CreateSpellcardModal from './CreateSpellcardModal';
import './NavBar.css'

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

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
          <LogoutButton />
        </>) : (
          <>
          <div className='demo-login-button' onClick={() => dispatch(demoLogin())}>Demo Login</div>
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

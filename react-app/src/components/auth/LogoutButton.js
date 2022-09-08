import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './auth.css'

const LogoutButton = ({ onClick }) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    onClick()
  };

  return <div className='logout-button' onClick={onLogout}>Logout</div>;
};

export default LogoutButton;

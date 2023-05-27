import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const Register = () => {
  return (
    <div className='Register'>
      <h2>Register</h2>
      <Link to='/' className='LoginLink'><h2>Login</h2></Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const Register = () => {
  return (
    <div className='Register'>
      <div className='Maincontent'>
        <h2>Register</h2>
        <h3>Please, go to login🔽 to Register</h3>
        <Link to='/' className='LoginLink'>Login</Link>
      </div>
    </div>
  );
}

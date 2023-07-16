import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/index.jsx';
import { Link } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import './index.css';
import { AllRightsReserved } from '../AllRightsReserved/index.jsx';

export const Login = () => {
  const { isLogin, setIsLogin } = useContext(Context);
  const [value, setValue] = useState('');
  const [valuePass, setValuePass] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const session = window.localStorage.getItem('session');
    if (session) {
      setToken(session);
      setIsLogin(true);
    }
  }, []);

  const { decodedToken } = useJwt(token);

  const handleLogin = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: value, password: valuePass })
    };

    const url = 'https://backend-login-puce.vercel.app/';

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          setIsLogin(true);
          setToken(data.token);
          localStorage.setItem('session', data.token);
        }
      })
      .catch(error => {
        setIsLogin(false);
      });
    setValue('');
    setValuePass('');
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleChangePass(event) {
    setValuePass(event.target.value);
  }

  return (
    <div className='body-login'>
      <div className='container-login'>
        <div className='login'>
          <h2>Login</h2>

          {isLogin ? ` Hola ${decodedToken?.username}` : ' Por favor, Logeate'}

          <form onSubmit={(event) => handleLogin(event)} className='Form'>
            <div className='container-inputs'>
              <input type='text' placeholder='Username or Gmail' value={value} onChange={handleChange} />
              <input type='password' placeholder='Password' value={valuePass} onChange={handleChangePass} />
            </div>
            <button type='submit'>login</button>
          </form>

          <Link to='/register' className='RegisterLogin' >Register</Link>
        </div>
        <AllRightsReserved />
      </div>
    </div>
  );
}

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/index.jsx';
import { Provider } from './context/index.jsx';
import { Register } from './components/Register/index.jsx';
import './index.css';

export const App = () => {
    return (
        <Provider>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                </Routes>
            </Router>
        </Provider>
    )
}

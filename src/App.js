import './App.css';
import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Dash from './pages/Dash';
import Sobre from './pages/Sobre';
import background from './img/montanhas.png'
import Login from './pages/Login';

export default function App() {
  return (
      <>
      <header>
      <Link to="/sobre" className='links'>Bem vindo</Link>
      <Link to="/" className='links'>Login</Link>
      <Link to="/home" className='links'>Home</Link>
      </header>
    <div>
    <Switch>
      <Route path='/home' component= {Dash}/>
      <Route path='/sobre' component= {Sobre}/>
      <Route path='/' component= {Login}/>
    </Switch>      
    <img src={background}>
    </img>
    </div>
    </>
  );
}


import React from 'react';
import {NavLink, BrowserRouter} from 'react-router-dom';
import Router from './Router';
import Navigation from './pages/Navigation'

const List= () => <nav>
    <ul>
      <li><NavLink to='/' >Home</NavLink></li>
      <li><NavLink to='/cart'> Cart</NavLink></li>
    </ul>
</nav>;

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <h1>My Shopping Cart</h1>
          <Navigation/>
          <List/>
          <Router/>
        </BrowserRouter>
    </div>
  );
}

export default App;

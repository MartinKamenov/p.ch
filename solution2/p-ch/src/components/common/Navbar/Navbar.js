import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='position-left row'>
        <nav className='nav'>
          <Link to='/' className='link'>Home</Link>
        </nav>
      </div>

      <div className='position-right row'>
        <nav className='nav'>
          <Link to='/councillors' className='link'>Councillors</Link>
        </nav>
        <nav className='nav'>
          <Link to='/councils' className='link'>Councils</Link>
        </nav>
        <nav className='nav'>
          <Link to='/affairs' className='link'>Affairs</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

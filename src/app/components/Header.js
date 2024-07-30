import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav>
        <ul>
          <li className='home'>Home</li>
          <li className='prep'>Prep</li>
          <li className='test'>Test</li>
          <li className='health'>Health</li>
          <li className='navigate'>Navigate</li>
        </ul>
      </nav>
      <div className="spacerBox"></div>
    </header>
  );
};

export default Header;

import React from 'react';
import './header.css';

// eslint-disable-next-line react/prop-types
const Header = ({ onStateCity }) =>
  (
    <div className="header">
      <h1>WEATHER</h1>
      <form>
        <input
          className="search form-control search-input"
          placeholder="Whrite the city"
          onKeyDownCapture={onStateCity}
        />
      </form>
    </div>
  );
export default Header;

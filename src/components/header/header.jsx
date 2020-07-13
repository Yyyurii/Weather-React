import React from 'react';
import './header.css';
import PropTypes from 'prop-types';

const propTypes = {
  onStateCity: PropTypes.func.isRequired,
};

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

Header.propTypes = propTypes;

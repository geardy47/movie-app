import React from 'react';
import Search from './Search';

const Header = (props) => {
  return (
    <header>
      <h3>{props.name}</h3>

      <Search
        value={props.value}
        handleOnChange={props.handleOnChange}
        handleOnSubmit={props.handleOnSubmit}
      ></Search>
    </header>
  );
};

export default Header;

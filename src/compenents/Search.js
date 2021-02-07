import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={props.handleOnSubmit}>
      <input
        className='search'
        type='search'
        placeholder='Search'
        value={props.value}
        onChange={props.handleOnChange}
      />
    </form>
  );
};

export default Search;

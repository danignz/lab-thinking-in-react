import React from 'react';

export default function SearchBar(props) {
  const { onSearch, onCheck } = props;

  return (
    <>
      <h3>Search</h3>
      <input
        type="text"
        placeholder="🔎"
        onChange={(e) => onSearch(e.target.value)}
      />
      <input
        id="checkbox"
        onChange={(e) => onCheck(e.target.checked)}
        type="checkbox"
      />
      <label htmlFor="#checkbox">Only show products in stock</label>
    </>
  );
}

import React, { useState } from 'react';

export default function SearchBar() {
  const [checked, setChecked] = useState(false);

  function checkValue(argumentValue) {
    setChecked(argumentValue);
  }

  return (
    <>
      <h3>Search</h3>
      <input type="text" />
      <input
        id="checkbox"
        onChange={(e) => checkValue(e.target.checked)}
        type="checkbox"
      />
      <label htmlFor="#checkbox">Only show products in stock</label>
    </>
  );
}

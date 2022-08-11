import React, { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [checked, setChecked] = useState(false);

  function handleCheck(argumentValue) {
    if (argumentValue) {
      const filtered = jsonData.filter(
        (elem) => elem.inStock === argumentValue
      );
      setProducts(filtered);
    } else {
      setProducts(jsonData);
    }
    setChecked(argumentValue);
  }

  const handleSearch = (searchValue) => {
    if (searchValue === '') {
      if (checked) {
        const filtered = jsonData.filter((elem) => elem.inStock === true);
        setProducts(filtered);
      } else {
        setProducts(jsonData);
      }
    } else {
      if (checked) {
        const filtered = jsonData.filter(
          (elem) =>
            elem.name.toLowerCase().includes(searchValue.toLowerCase()) &&
            elem.inStock === true
        );
        setProducts(filtered);
      } else {
        const filtered = jsonData.filter((elem) =>
          elem.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setProducts(filtered);
      }
    }
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={handleSearch} onCheck={handleCheck} />
      <ProductTable productList={products} />
    </div>
  );
}

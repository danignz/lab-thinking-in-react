import React, { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const handleSearch = (searchValue) => {
    if (searchValue === '') {
      setProducts(jsonData);
    } else {
      const filtered = jsonData.filter((elem) =>
        elem.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProducts(filtered);
    }
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductTable productList={products} />
    </div>
  );
}

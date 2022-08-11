import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable({ productList }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((elem) => {
            return <ProductRow key={elem.id} product={elem} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

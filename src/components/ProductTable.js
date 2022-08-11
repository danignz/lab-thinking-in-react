import React from 'react';

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
            return (
              <tr key={elem.id}>
                <td>{elem.name}</td>
                <td>{elem.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

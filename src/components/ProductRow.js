import React from 'react';

export default function ProductRow({ product }) {
  const showColor = !product.inStock ? 'red' : 'black';

  return (
    <tr>
      <td style={{ color: showColor }}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

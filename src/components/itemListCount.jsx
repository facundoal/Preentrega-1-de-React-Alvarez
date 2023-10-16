import React, { useState } from 'react';

const ItemListCount = () => {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(10); 

  const sumarCantidad = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restarCantidad = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={restarCantidad} disabled={count === 0}>-</button>
      <span>{count}</span>
      <button onClick={sumarCantidad} disabled={count === setStock}>+</button>
    </div>
  );
};

export default ItemListCount;
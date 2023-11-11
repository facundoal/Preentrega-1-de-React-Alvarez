import "../itemCount/itemCount.css"
import React, {  useContext, useState } from 'react';
import {CartContext} from "../../context/CartContext";

const ItemListCount = ({item}) => {
  const  { carrito, agregarCantidad } = useContext (CartContext);
 console.log (carrito)

  const [count, setCount] = useState(1);
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
      <div className="item-count">
      <button onClick={restarCantidad} disabled={count === 0}>-</button>
      <span>{count}</span>
      <button onClick={sumarCantidad} disabled={count === setStock}>+</button>
      </div>
    <button className="agregar-al-carrito" onClick={()=> {agregarCantidad(item, count)}}>Agregar al carrito</button>
</div>
  );
};

export default ItemListCount;
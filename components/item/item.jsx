import "../item/item.css"

import { Link } from 'react-router-dom';
const Item = ({ producto }) => {
  const { id,Categoria,nombre, precio, tamaño, imagen } = producto;

  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <ul>
      <li><h2>{Categoria}</h2></li>
      <li><h2>{nombre}</h2></li>
      <li><p>Precio: ${precio}</p></li>
      <li><p>Tamaño: {tamaño}</p></li>
      <li><Link to = {`/item/${id}`} > Ver Detalle </Link></li>
      </ul>  
    </div>
  );
};

export default Item;





import { Link } from 'react-router-dom';
const Item = ({ producto }) => {
  const { id,nombre, precio, tamaño, imagen } = producto;

  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <p>Tamaño: {tamaño}</p>
      <Link to = {`/item/${id}`} > Ver Detalle </Link>  
    </div>
  );
};

export default Item;





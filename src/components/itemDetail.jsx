import ItemListCount from "./itemListCount";

const ItemDetail = ({ producto }) => {
    return (
      <div>
        <h2>{producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p> 
        <p>{producto.tamaño}</p>
        <p>{producto.descripcion}</p>
        <img src={producto.imagen} alt={producto.nombre} />
        
        <p><ItemListCount/>Agregar al carrito</p>
      </div>
    );
  };
  
  export default ItemDetail;
import ItemListCount from "./itemCount/itemListCount";


const ItemDetail = ({ item }) => {
  return (
    <div>
      {item && (
        <>
        <h2>{item.categoria}</h2>
          <h2>{item.nombre}</h2>
          <p>Precio: ${item.precio}</p>
          <p>{item.descripcion}</p>
          <ItemListCount item={item}/>
          <img src={item.imagen} alt=""/>
        </>
      )}
    </div>
  );
};

export default ItemDetail
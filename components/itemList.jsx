import Item from './item/item';

const ItemList = ({ productos, titulo }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      {productos.map(producto => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;

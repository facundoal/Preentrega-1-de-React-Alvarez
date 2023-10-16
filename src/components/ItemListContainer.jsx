import ItemList from "./itemList";


const ItemListContainer = () => {
  const mates = [
    { id: 1, nombre: 'Mate Camionero', precio: 6000, tamaño: 'Mediano', imagen: 'https://i.ibb.co/0fQhX1G/mate-camionero-2.jpg' },
    { id: 2, nombre: 'Mate Torpedo', precio: 5000, tamaño: 'Pequeño', imagen: 'https://i.ibb.co/rkWRFLG/mate-torpedo.png' },
    { id: 3, nombre: 'Mate Imperial', precio: 7000, tamaño: 'Grande', imagen: 'https://i.ibb.co/1v05jWt/mate-imperial-1.webp' },
  ];

  return (
    <div>
      <h1>Lista de Mates</h1>
      <ItemList productos={mates} />
    </div>
  );
};

 export const ItemListContaine = ({ greeting }) => {
    return (
      <div style={{ color:"green", textAlign:"center" }}>
        <h2>{greeting}</h2>
      </div>
    );
  };
export default ItemListContainer;








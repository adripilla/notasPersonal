// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Obtener la lista de elementos desde la API al cargar el componente
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://puffy-tree-balloon.glitch.me/whatsapp/mensajes');
        setItems(response.data);
      } catch (error) {
        console.error('Error al obtener los elementos:', error);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = (itemId) => {
    // Actualizar la lista de elementos después de eliminar uno
    setItems(items.filter(item => item._id !== itemId));
  };

  return (
    <div>
      <h1>Lista de Elementos</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {items.map(item => {
          return (
            <ListItem key={item._id} item={item} onDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
};

export default App;

// src/ListItem.js
import React from 'react';
import axios from 'axios';

const ListItem = ({ item, onDelete }) => {
  const handleDragStart = (e) => {
    // Iniciar operación de arrastre
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDragEnd = async () => {
    // Realizar la solicitud DELETE a la API
    try {
      await axios.delete(`https://puffy-tree-balloon.glitch.me/whatsapp/mensajes/${item._id}`);
      onDelete(item._id); // Actualizar la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar el elemento:', error);
    }
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ padding: '10px', margin: '5px', border: '1px solid #ccc', cursor: 'move' }}
    >
      <p>{item.mensaje}</p>
    </div>
  );
};

export default ListItem;

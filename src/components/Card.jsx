// src/components/Card.jsx
import React from "react";
import "./Card.css";

/**
 * Componente que representa cada desenho animado.
 */
const Card = ({ image, title, genre, creator }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Gênero: {genre}</p>
      <p className="creator">Criado por: {creator}</p>
    </div>
  );
};

export default Card;
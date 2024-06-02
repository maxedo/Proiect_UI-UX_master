import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const GameThumbnail = ({ id, title, image, onAddToList }) => {
  return (
    <div className="game-thumbnail">
      <Link className="game-image-link" to={{ pathname: `/game/${id}`, state: { id, title, image } }}>
        <img src={image} alt={title} className="game-image" />
      </Link>
      <div className="game-add" onClick={(e) => {
        e.preventDefault(); // Prevent navigation when clicking the + button
        onAddToList(id);
      }}>+</div>
    </div>
  );
};

export default GameThumbnail;

import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';

const GameThumbnail = ({ title, image }) => {
  return (
    <Link className="game-thumbnail" to="/game-details-page">
      <img src={image} alt={title} className="game-image" />
      <div className="game-add">+</div>
      </Link>
  );
};

export default GameThumbnail;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import './styles.css';

const GameListPage = () => {
  const [games, setGames] = useState([]);
  const token = localStorage.getItem('user-info');

  const fetchGameList = async () => {
    try {
      const response = await fetch('http://localhost:5000/ListGames', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        setGames(data);
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching game list:', error);
    }
  };

  const handleRemove = async (gameId) => {
    try {
      const response = await fetch(`http://localhost:5000/ListGames/${gameId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setGames(games.filter(game => game.Id !== gameId));
      } else {
        console.error('Failed to remove game');
      }
    } catch (error) {
      console.error('Error removing game:', error);
    }
  };

  useEffect(() => {
    fetchGameList();
  }, []);

  return (
    <div className="game-list-page">
      <Header />
      <div className="content">
        <h2>My game list</h2>
        <div className="game-list">
          {games.map((game, index) => (
            <div key={index} className="game-item">
              <Link to={{ pathname: `/game/${game.Id}`, state: { id: game.Id } }}>
                {game.IMAGE ? (
                  <img src={`http://localhost:5000/poze_jocuri/${game.IMAGE}`} alt={game.NAME} className="game-image-thumb" />
                ) : (
                  <div className="no-image">No Image</div>
                )}
                <span className="game-title">{game.NAME || 'No Name'}</span>
              </Link>
              <div className="remove-button" onClick={() => handleRemove(game.Id)}>x</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameListPage;

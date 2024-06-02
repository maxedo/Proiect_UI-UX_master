import React, { useEffect, useState } from 'react';
import GameThumbnail from '../GameThumbnail';
import './styles.css';

const GameGrid = () => {
  const [games, setGames] = useState([]);
  const [gameList, setGameList] = useState([]);
  const token = localStorage.getItem('user-info');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:5000/Games', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    const fetchGameList = async () => {
      try {
        const response = await fetch('http://localhost:5000/ListGames', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setGameList(data);
      } catch (error) {
        console.error('Error fetching game list:', error);
      }
    };

    fetchGames();
    fetchGameList();
  }, []);

  const handleAddToList = async (id) => {
    // Check if the game is already in the game list
    if (gameList.some(game => game.Id === id)) {
      console.log('Game is already in the list');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/ListGames/${id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log('Game added to list');
        setGameList([...gameList, games.find(game => game.Id === id)]);
      } else {
        console.error('Failed to add game to list');
      }
    } catch (error) {
      console.error('Error adding game to list:', error);
    }
  };

  return (
    <div className="game-grid">
      {games.map((game, index) => (
        <GameThumbnail
          key={index}
          id={game.Id}
          title={game.NAME}
          image={`http://localhost:5000/poze_jocuri/${game.IMAGE}`}
          onAddToList={handleAddToList}
        />
      ))}
    </div>
  );
};

export default GameGrid;

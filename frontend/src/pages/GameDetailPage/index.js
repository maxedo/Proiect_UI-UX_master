import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useParams, useLocation } from 'react-router-dom';
import './styles.css';

const GameDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [game, setGame] = useState(location.state || {});
  const [reviews, setReviews] = useState([]);
  const [score, setScore] = useState(0);
  const token = localStorage.getItem('user-info');

  const fetchGameDetails = async () => {
    if (!game.NAME) {
      try {
        const response = await fetch(`http://localhost:5000/Games/${id}`);
        const data = await response.json();
        setGame(data);
        console.log(game)
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:5000/Reviews/${id}`);
      const data = await response.json();
      setReviews(data);
      const avgScore = data.reduce((acc, review) => acc + review.RATING, 0) / data.length;
      setScore(avgScore);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleAddToList = async () => {
    try {
      const response = await fetch(`http://localhost:5000/ListGames/${id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log('Game added to list');
      } else {
        console.error('Failed to add game to list');
      }
    } catch (error) {
      console.error('Error adding game to list:', error);
    }
  };

  useEffect(() => {
    fetchGameDetails();
    fetchReviews();
  }, [id]);

  return (
    <div className="game-detail-page">
      <Header />
      <div className="game-detail-content">
        <div className="game-detail-left-section">
          <h1 className="game-detail-title">{game.NAME}</h1>
          <p className="game-detail-description">{game.DESCRIPTION}</p>
          <div className="game-detail-reviews">
            <h2 className="game-detail-reviews-title">Reviews</h2>
            <div className="game-detail-reviews-container">
              {reviews.map(review => (
                <div key={review.Id} className="game-detail-review">
                  <h3 className="game-detail-review-author">{review.REVIEWER_NAME}</h3>
                  <p className="game-detail-review-text">{review.COMMENT}</p>
                  <div className="game-detail-review-rating">Rating: {review.RATING} / 5</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="game-detail-right-section">
          <img src={`http://localhost:5000/poze_jocuri/${game.IMAGE}`} alt="Game" className="game-detail-image" />
          <div className="game-detail-score">Score: {score.toFixed(1)} / 5</div>
          <button className="game-detail-add-to-list" onClick={handleAddToList}>Add to Game List</button>
          <p className="game-detail-genre">Genre: {game.CATEGORY}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;

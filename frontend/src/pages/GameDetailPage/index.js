import React from 'react';
import Header from '../../components/Header';
import './styles.css';

const reviews = [
  { id: 1, author: 'John Doe', text: 'Great game, very engaging!', rating: 5 },
  { id: 2, author: 'Jane Smith', text: 'Loved the graphics and gameplay.', rating: 4 },
  { id: 3, author: 'John Doe', text: 'Great game, very engaging!', rating: 5 },
  { id: 4, author: 'Jane Smith', text: 'Loved the graphics and gameplay.', rating: 4 },
  { id: 5, author: 'John Doe', text: 'Great game, very engaging!', rating: 5 },
  { id: 6, author: 'Jane Smith', text: 'Loved the graphics and gameplay.', rating: 4 },
  { id: 7, author: 'John Doe', text: 'Great game, very engaging!', rating: 5 },
  { id: 8, author: 'Jane Smith', text: 'Loved the graphics and gameplay.', rating: 4 },
  { id: 9, author: 'John Doe', text: 'Great game, very engaging!', rating: 5 },
  { id: 10, author: 'Jane Smith', text: 'Loved the graphics and gameplay.', rating: 4 },
];

const gameScore = (5+4+5+4+5+4+5+4+5+4)/10; 

const GameDetailPage = () => {
  return (
    <div className="game-detail-page">
      <Header />
      <div className="game-detail-content">
        <div className="game-detail-left-section">
          <h1 className="game-detail-title">Fortnite</h1>
          <p className="game-detail-description">
            Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more.
            Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more.
            Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more.
          </p>
          <div className="game-detail-reviews">
            <h2 className="game-detail-reviews-title">Reviews</h2>
            <div className="game-detail-reviews-container">
              {reviews.map(review => (
                <div key={review.id} className="game-detail-review">
                  <h3 className="game-detail-review-author">{review.author}</h3>
                  <p className="game-detail-review-text">{review.text}</p>
                  <div className="game-detail-review-rating">Rating: {review.rating} / 5</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="game-detail-right-section">
          <img src="https://cdn2.unrealengine.com/social-image-chapter4-s3-3840x2160-d35912cc25ad.jpg" alt="Game" className="game-detail-image" />
          <div className="game-detail-score">Score: {gameScore} / 5</div>
          <button className="game-detail-add-to-list">Add to Game List</button>
          <p className="game-detail-genre">Genre: Action, Shooter</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;

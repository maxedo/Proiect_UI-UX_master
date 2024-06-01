import React from 'react';
import Header from '../../components/Header';
import './styles.css';

const reviews = [
  { id: 1, game: 'Fortnite', text: 'Great game, very engaging!', rating: 5 },
  { id: 2, game: 'Minecraft', text: 'Loved the graphics and gameplay.', rating: 4 },
  { id: 3, game: 'Fortnite', text: 'Great game, very engaging!', rating: 5 },
  { id: 4, game: 'Minecraft', text: 'Loved the graphics and gameplay.', rating: 4 },
  { id: 5, game: 'Fortnite', text: 'Great game, very engaging!', rating: 5 },
  { id: 6, game: 'Minecraft', text: 'Loved the graphics and gameplay.', rating: 4 },
  { id: 7, game: 'Fortnite', text: 'Great game, very engaging!', rating: 5 },
  { id: 8, game: 'Minecraft', text: 'Loved the graphics and gameplay.', rating: 4 },
  { id: 9, game: 'Fortnite', text: 'Great game, very engaging!', rating: 5 },
  { id: 10, game: 'Minecraft', text: 'Loved the graphics and gameplay.', rating: 4 },
];

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Header />
      <div className="profile-content">
        <div className="profile-left-section">
          <h1 className="profile-nickname">Pavel</h1>
          <p className="profile-about">Fortnite gamer 69</p>
          <div className="profile-reviews">
            <h2 className="profile-reviews-title">Reviews</h2>
            <div className="profile-reviews-container">
              {reviews.map(review => (
                <div key={review.id} className="profile-review">
                  <h3 className="profile-review-game">{review.game}</h3>
                  <p className="profile-review-text">{review.text}</p>
                  <div className="profile-review-rating">Rating: {review.rating} / 5</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="profile-right-section">
          <img src="https://assets.xboxservices.com/assets/20/38/203850f5-1bed-4912-b25f-193ee890c97f.jpg?n=Fortnite_GLP-Page-Hero-1084_876951_1920x1080.jpg" alt="User" className="profile-image" />
          <button className="profile-edit-button">Edit Picture</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

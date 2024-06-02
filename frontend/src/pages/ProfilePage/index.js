import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import './styles.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState({ Nickname: '', ABOUT_ME: '', PHOTO: '' });
  const [reviews, setReviews] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);
  const [newAboutMe, setNewAboutMe] = useState('');
  const token = localStorage.getItem('user-info');

  const fetchData = async () => {
    try {
      const profileResponse = await fetch('http://localhost:5000/Profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const profileData = await profileResponse.json();
      setProfile(profileData[0]);

      const reviewsResponse = await fetch('http://localhost:5000/User_Reviews', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const reviewsData = await reviewsResponse.json();
      setReviews(reviewsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAboutMeChange = async () => {
    try {
      const response = await fetch('http://localhost:5000/AboutMe', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ AboutMe: newAboutMe }),
      });
      if (response.ok) {
        setProfile({ ...profile, ABOUT_ME: newAboutMe });
        setNewAboutMe('');
        setShowEdit(false);
      } else {
        console.error('Failed to update AboutMe');
      }
    } catch (error) {
      console.error('Error updating AboutMe:', error);
    }
  };

  const handlePhotoChange = async (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);

    try {
      const response = await fetch('http://localhost:5000/Avatar', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      if (response.ok) {
        fetchData(); // Refresh profile data to get the new photo
        setShowFileInput(false);
      } else {
        console.error('Failed to update photo');
      }
    } catch (error) {
      console.error('Error updating photo:', error);
    }
  };

  return (
    <div className="profile-page">
      <Header />
      <div className="profile-content">
        <div className="profile-left-section">
          <h1 className="profile-nickname">{profile.Nickname}</h1>
          <p className="profile-about">{profile.ABOUT_ME}</p>
          {showEdit ? (
            <div>
              <input
                type="text"
                value={newAboutMe}
                onChange={(e) => setNewAboutMe(e.target.value)}
              />
              <button onClick={handleAboutMeChange}>Save</button>
            </div>
          ) : (
            <button onClick={() => setShowEdit(true)}>Edit About Me</button>
          )}
          <div className="profile-reviews">
            <h2 className="profile-reviews-title">Reviews</h2>
            <div className="profile-reviews-container">
              {reviews.map((review) => (
                <div key={review.Id} className="profile-review">
                  <h3 className="profile-review-game">{review.IdGame}</h3>
                  <p className="profile-review-text">{review.COMMENT}</p>
                  <div className="profile-review-rating">Rating: {review.RATING} / 5</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="profile-right-section">
          <img src={`http://localhost:5000/poze_users/${profile.PHOTO}`} alt="User" className="profile-image" />
          {showFileInput && (
            <input type="file" onChange={handlePhotoChange} />
          )}
          <button className="profile-edit-button" onClick={() => setShowFileInput(!showFileInput)}>
            {showFileInput ? 'Submit' : 'Edit Picture'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

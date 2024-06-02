import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Image from './igdb2.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');
  const token = localStorage.getItem('user-info');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('http://localhost:5000/Profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const profileData = await response.json();
        setProfilePicture(`http://localhost:5000/poze_users/${profileData[0].PHOTO}`);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [token]);

  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="left-section">
        <Link to="/" className="logo">
          <img src={Image} alt="iGDB Logo" />
        </Link>
        <div
          className="menu-container"
          onMouseEnter={handleMouseEnter}
        >
          <div className="menu-button">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <span className="menu-text">Menu</span>
          {menuOpen && (
            <div className="dropdown-menu">
              <Link to="/game-list">My GameList</Link>
              <div className="submenu"
                onMouseLeave={handleMouseLeave}
              >
                <span className="submenu-title">Recommend me a random game</span>
                <div className="submenu-content">
                  <Link to="/recommend/adventure">Adventure</Link>
                  <Link to="/recommend/hack-n-slash">Hack n’ Slash</Link>
                  <Link to="/recommend/fps">First Person Shooter</Link>
                  <Link to="/recommend/tps">Third Person Shooter</Link>
                  <Link to="/recommend/horror">Horror</Link>
                  <Link to="/recommend/souls-like">Souls-like</Link>
                  <Link to="/recommend/roguelite">Roguelite</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search on iGDB" />
        <select className="category-dropdown">
          <option value="all">All categories</option>
          <option value="hack-n-slash">Hack n’ Slash</option>
          <option value="rpg">RPG</option>
        </select>
      </div>
      <Link to="/profile" className='profile'>
        <img src={profilePicture} alt="User Profile" className="profile-picture" />
      </Link>
    </header>
  );
};

export default Header;
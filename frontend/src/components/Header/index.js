import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import Image from './igdb2.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');
  const token = localStorage.getItem('user-info');
  const navigate = useNavigate();

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

  const handleRecommend = async () => {
    try {
      const response = await fetch('http://localhost:5000/RecommendMe', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const randomGame = await response.json();
      navigate(`/game/${randomGame.Id}`, { state: randomGame });
    } catch (error) {
      console.error('Error fetching random game:', error);
    }
  };

  const cautareCuFiltru = async ()=>{
    try{
      const response = await fetch('http://localhost:5000/RecommendMe', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const randomGame = await response.json();
      navigate(`/game/${randomGame.Id}`, { state: randomGame });
    }catch(error){console.error('Error fetching random game:', error); }
  }

  const cautareFaraFiltru = async ()=>{
    const response = await fetch('http://localhost:5000/RecommendMe', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const randomGame = await response.json();
      navigate(`/game/${randomGame.Id}`, { state: randomGame });
  }

  return (
    <header className="header">
      <div className="left-section">
        <Link to="/Dashboard" className="logo">
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
                onClick={handleRecommend}
              >
                <span className="submenu-title">Recommend me a random game</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search on iGDB" />
        <button className='searchButton'>Search</button>
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

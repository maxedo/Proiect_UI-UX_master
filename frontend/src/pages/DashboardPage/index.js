import React from 'react';
import Header from '../../components/Header';
import GameGrid from '../../components/GameGrid';
import './styles.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Header />
      <div className="content">
        <h2>Our daily favorites</h2>
        <GameGrid className="game-grid" />
      </div>
    </div>
  );
};

export default DashboardPage;

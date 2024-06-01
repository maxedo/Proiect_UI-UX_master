import React from 'react';
import GameThumbnail from '../GameThumbnail';
import './styles.css';

const games = [
  { title: 'Palworld', image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/palworld-pals-logo-what-to-expect.jpg' },
  { title: 'Project Zomboid', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108600/capsule_616x353.jpg?t=1691508011' },
  { title: 'Darkest Dungeon', image: 'https://cdn1.epicgames.com/offer/6ff9efdef6dc45ecb40ed20fcd2c4621/DD2-EGS-1point0-Offer-Landscape-_2560x1440-349c0e85973bbad79ac49d12a71736f6' },
  { title: 'Elden Ring', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg?t=1716311593' },
  { title: 'Sekiro', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/capsule_616x353.jpg?t=1678991267' },
  { title: 'Vampire Survivors', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794680/capsule_616x353.jpg?t=1715080146' },
  { title: 'Buckshot Roulette', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2835570/capsule_616x353.jpg?t=1715215363' },
  { title: 'Counter Strike', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/capsule_616x353.jpg?t=1716504320' },
  { title: 'Hitman', image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659040/capsule_616x353.jpg?t=1713343444' },
];

const GameGrid = () => {
  return (
    <div className="game-grid">
      {games.map((game, index) => (
        <GameThumbnail key={index} image={game.image} />
      ))}
    </div>
  );
};

export default GameGrid;

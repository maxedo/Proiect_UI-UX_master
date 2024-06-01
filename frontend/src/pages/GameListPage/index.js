import React from 'react';
import Header from '../../components/Header';
import './styles.css';

const games = [
  { title: 'Smite', image: 'https://logos-world.net/wp-content/uploads/2021/04/Smite-Logo.png' },
  { title: 'Tekken 7', image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Official_Tekken_7_Logo.jpg' },
  { title: 'ULTRAKILL', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLXSmChTVD-Ezri9XCSg-a-1vS_9zrMNwNg&s' },
  { title: 'Resident Evil 4 Remake', image: 'https://res.cloudinary.com/teepublic/image/private/s--28Obq9hA--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-173/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-284/b_rgb:000000/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1674147493/production/designs/38560325_0.jpg' },
  { title: 'Metel - Horror Escape', image: 'https://play-lh.googleusercontent.com/hj9U4yAtJceXcX82gtJf7R-lX4MS-Lo_0u9f3CLczBH4CzPeqfVe_OxjDlxDOdzJAEw' },
  { title: 'My Summer Car', image: 'https://i1.sndcdn.com/artworks-000193209676-2o6cie-t500x500.jpg' },
  { title: 'Blair Witch', image: 'https://cdn2.steamgriddb.com/logo/b8a6550662b363eb34145965d64d0cfb.png' },
  
];

const GameListPage = () => {
    const handleRemove = (title) => {
      console.log(`Remove ${title}`);
    };
  
    return (
      <div className="game-list-page">
        <Header />
        <div className="content">
          <h2>My game list</h2>
          <div className="game-list">
            {games.map((game, index) => (
              <div key={index} className="game-item">
                <img src={game.image} alt={game.title} className="game-image-thumb" />
                <span className="game-title">{game.title}</span>
                <div className="remove-button" onClick={() => handleRemove(game.title)}>x</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default GameListPage;

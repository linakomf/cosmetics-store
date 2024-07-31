import React, { useEffect, useState } from 'react';
import '../Styles/FavoritesPage.css';

const FavoritesPage = ({ favorites, setFavorites }) => {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    calculateTotalSum();
  }, [favorites]);

  const calculateTotalSum = () => {
    
    const sum = favorites.reduce((acc, item) => 
      acc + parseFloat(item.price.replace('₸', '').replace(' ', '')), 0
    );
    setTotalSum(sum);
  };

  const removeFromFavorites = (productId) => {
    
    const updatedFavorites = favorites.filter((item) => item.id !== productId);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-page">
      <h2>Favorites</h2>
      <div className="favorites-list">
        {favorites.map((item) => (
          <div key={item.id} className="favorite-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name} - {item.price}</p>
            <button 
              className="delete-button" 
              onClick={() => removeFromFavorites(item.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Product Cost: <span>{totalSum.toLocaleString()} ₸</span></p>
        <p>Total: <span>{totalSum.toLocaleString()} ₸</span></p>
        <button className="order-button">Place Order</button>
      </div>
    </div>
  );
};

export default FavoritesPage;

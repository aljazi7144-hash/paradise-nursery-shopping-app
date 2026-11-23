import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=600&q=80',
          description: 'Produces oxygen at night and is easy to care for.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80',
          description: 'Filters indoor toxins and thrives in indirect light.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600&q=80',
          description: 'Features elegant white blooms and boosts humidity.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80',
          description: 'Lush feathery fronds ideal for hanging baskets.',
          cost: '$14',
        },
        {
          name: 'Rubber Plant',
          image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80',
          description: 'Broad glossy leaves that add bold architectural style.',
          cost: '$22',
        },
        {
          name: 'Areca Palm',
          image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
          description: 'Soft arching palm fronds for bright indoor spaces.',
          cost: '$25',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1528756568787-3a1f7322a04a?auto=format&fit=crop&w=600&q=80',
          description: 'Calming floral scent and silvery-green foliage.',
          cost: '$14',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729645009-b21d1e014143?auto=format&fit=crop&w=600&q=80',
          description: 'Sweet-smelling blossoms that brighten sunny spots.',
          cost: '$16',
        },
        {
          name: 'Rosemary',
          image: 'https://images.unsplash.com/photo-1515586838455-8f8f940891aa?auto=format&fit=crop&w=600&q=80',
          description: 'Pine-like fragrance great for kitchens and sunny sills.',
          cost: '$11',
        },
        {
          name: 'Mint',
          image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80',
          description: 'Refreshing crisp aroma with fast-growing leaves.',
          cost: '$9',
        },
        {
          name: 'Eucalyptus',
          image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80',
          description: 'Invigorating cooling scent and rounded blue-green leaves.',
          cost: '$19',
        },
        {
          name: 'Gardenia',
          image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80',
          description: 'Creamy white flowers with a rich, classic perfume.',
          cost: '$20',
        },
      ],
    },
    {
      category: 'Medicinal & Low-Maintenance Plants',
      plants: [
        {
          name: 'Aloe Vera',
          image: 'https://images.unsplash.com/photo-1509423350716-9f20460e27f2?auto=format&fit=crop&w=600&q=80',
          description: 'Soothing gel inside thick leaves with minimal watering.',
          cost: '$13',
        },
        {
          name: 'Chamomile',
          image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
          description: 'Delicate daisy-like flowers traditionally used for tea.',
          cost: '$10',
        },
        {
          name: 'Basil',
          image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=600&q=80',
          description: 'Aromatic culinary herb that loves bright sunlight.',
          cost: '$8',
        },
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
          description: 'Ultra-resilient plant tolerating low light and neglect.',
          cost: '$21',
        },
        {
          name: 'Pothos',
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80',
          description: 'Trailing heart-shaped leaves that adapt easily indoors.',
          cost: '$12',
        },
        {
          name: 'Calendula',
          image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80',
          description: 'Vibrant orange-gold petals known in herbal care.',
          cost: '$11',
        },
      ],
    },
  ];

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowCart(false);
    if (onHomeClick) {
      onHomeClick();
    }
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">
          <a href="#home" onClick={handleHomeClick}>
            Paradise Nursery
          </a>
        </div>
        <div className="nav-links">
          <a href="#home" onClick={handleHomeClick}>
            Home
          </a>
          <a href="#plants" onClick={handlePlantsClick}>
            Plants
          </a>
          <a href="#cart" onClick={handleCartClick}>
            Cart ({totalCartItems})
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid-container">
          {plantsArray.map((categoryObj) => (
            <div key={categoryObj.category} className="category-section">
              <h2 className="category-title">{categoryObj.category}</h2>
              <div className="product-grid">
                {categoryObj.plants.map((plant) => {
                  const isAdded = !!addedToCart[plant.name];
                  return (
                    <div key={plant.name} className="product-card">
                      <img src={plant.image} alt={plant.name} className="product-image" />
                      <h3 className="product-name">{plant.name}</h3>
                      <p className="product-description">{plant.description}</p>
                      <p className="product-cost">{plant.cost}</p>
                      <button
                        type="button"
                        className="add-to-cart-btn"
                        disabled={isAdded}
                        onClick={() => handleAddToCart(plant)}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;

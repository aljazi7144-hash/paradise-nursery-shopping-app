import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const parseCost = (costStr) => {
    return parseFloat(String(costStr).replace(/[^0-9.]/g, '')) || 0;
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert('Checkout functionality is Coming Soon!');
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div className="cart-items-list">
        {cartItems.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.name} className="cart-item-card">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Unit Price: {item.cost}</p>
                <p>Total Cost: ${calculateTotalCost(item)}</p>
                <div className="cart-quantity-controls">
                  <button
                    type="button"
                    className="quantity-btn"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button
                    type="button"
                    className="quantity-btn"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-actions">
        <button
          type="button"
          className="continue-shopping-btn"
          onClick={onContinueShopping}
        >
          Continue Shopping
        </button>
        <button
          type="button"
          className="checkout-btn"
          onClick={handleCheckoutShopping}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;

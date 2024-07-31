import React, { useState } from 'react';
import '../Styles/CheckoutPage.css';
import axios from "axios";

const CheckoutPage = ({ cart, totalSum }) => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('visa');
  const [cardNumber, setCardNumber] = useState('');
  const [paymentTiming, setPaymentTiming] = useState('immediate');
  const [agreement, setAgreement] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleOrder = () => {
    if (agreement) {
      const body = {
        country,
        city,
        address,
        payType: paymentMethod,
        cardNumber,
        payTime: paymentTiming
      }
      axios.post('http://localhost:5002/orders', body);
      setOrderSuccess(true);
    } else {
      alert("Please agree to the terms.");
    }
  };

  return orderSuccess ? (
    <div className="order-success">
      <h2>Order successfully placed!</h2>
      <p>Delivery is on the way.</p>
    </div>
  ) : (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form>
        <label>Country:
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </label>
        <label>City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <label>Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>Payment Method:
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="visa">Visa</option>
            {/* Add other payment methods if necessary */}
          </select>
        </label>
        {paymentMethod === 'visa' && (
          <label>Card Number:
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </label>
        )}
        <label>Payment Timing:
          <select value={paymentTiming} onChange={(e) => setPaymentTiming(e.target.value)}>
            <option value="immediate">Immediate</option>
            <option value="onDelivery">On Delivery</option>
          </select>
        </label>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Product Cost: <span>{totalSum.toLocaleString()} ₸</span></p>
          <p>Total: <span>{totalSum.toLocaleString()} ₸</span></p>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name} - {item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <label>
          <input type="checkbox" checked={agreement} onChange={() => setAgreement(!agreement)} />
          I agree to the <a href="/terms">Terms of Use</a> and <a href="/return-policy">Return Policy</a>
        </label>
        <button type="button" onClick={handleOrder}>Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;

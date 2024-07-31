import React from 'react';
import '../Styles/DeliveryPaymentPage.css';

const DeliveryPaymentPage = () => {
    return (
        <div className="delivery-payment-wrapper">
            <div className="container">
                <h1 className="title">Delivery and Payment</h1>
                
                <div className="delivery-section">
                    <h2 className="subtitle">Same Day Delivery:</h2>
                    <p>If your order was placed before 10 AM, we guarantee delivery of your product on the same day. Our team promptly processes orders and organizes delivery so you can receive your desired product as quickly as possible.</p>
                </div>
                
                <hr />

                <div className="delivery-section">
                    <h2 className="subtitle">Next Day Delivery:</h2>
                    <p>If you placed your order after 10 AM, don't worry, your product will be delivered the next day. We understand that being patient is not always easy, but we do our best to ensure quick processing and delivery even for orders placed after the set time.</p>
                    <p>If you wish to cancel an order, you need to contact the operator by 8:00 PM the day before the scheduled delivery by calling 8 747 393 55 55 and provide the order number you wish to cancel.</p>
                </div>

                <hr />

                <div className="payment-section">
                    <h2 className="subtitle">Gift Certificates as Payment:</h2>
                    <p>Gift certificates are not accepted as payment for orders in the online store.</p>
                </div>

                <hr />

                <div className="delivery-methods-section">
                    <h2 className="subtitle">Delivery Methods in Almaty and Almaty Region:</h2>
                    <div className="delivery-method">
                        <h3 className="method-title">Courier Delivery</h3>
                        <p>For orders within the specified area, the delivery cost is 1500 KZT. The delivery cost outside the specified area is calculated individually, according to the courier service rates.</p>
                        <p>After placing an order, an online store operator will contact you (using the phone number you provided) to confirm your order.</p>
                        <p>If the courier, upon arrival at the delivery address, cannot reach the customer within 10 minutes, the order is considered canceled, and the delivery cost is non-refundable.</p>
                    </div>
                </div>

                <hr />

                <div className="payment-methods-section">
                    <h2 className="subtitle">Available Payment Methods:</h2>
                    <ul>
                        <li>Online Card Payment</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DeliveryPaymentPage;

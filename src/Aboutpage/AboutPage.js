import React from 'react';
import '../Styles/AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-us-wrapper">
            <div className="container">
                <h1 className="title">About us</h1>
                <div className="section">
                    <p>
                        Welcome to the exciting world of Beauty Store! We believe that beauty should have no boundaries or barriers, so we provide access to an endless variety of cosmetic products for everyone.
                    </p>
                    <p>
                        The Beauty Store online shop is one of the largest online stores in Kazakhstan. Today, Beauty Store is your favorite cosmetics, stores within walking distance, and great prices. The trust of thousands of customers and beauty accessible to everyone is the result of our hard work. In the Beauty Store chain, products from the most popular brands are presented: more than 18,000 product positions for every taste. Cosmetics that people love and come back for again and again to Beauty Store, because there can never be too much beauty!
                    </p>
                </div>
                <div className="section">
                    <h2 className="subtitle">Our Contacts</h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <span className="icon">&#128197;</span>
                            <span>Our store is located in Almaty, on Tole bi street.</span>
                        </div>
                        <div className="contact-item">
                            <span className="icon">&#8986;</span>
                            <span>
                                <strong>Working hours:</strong><br />
                                Mon-Sat, from 10:00 to 21:00.
                            </span>
                        </div>
                        <div className="contact-item">
                            <span className="icon">&#9742;</span>
                            <span>
                                <strong>Phone:</strong><br />
                                +7 775 075 25 50<br />
                                +7 702 049 25 00
                            </span>
                        </div>
                        <div className="contact-item">
                            <span className="icon">&#9993;</span>
                            <span>
                                <strong>E-mail:</strong> beautystore@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

import React from 'react';
import './Aboutus.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission, values, and team.</p>
      </header>

      <section className="mission-values">
        <h2>Our Mission</h2>
        <p>Our mission is to deliver fresh vegetables and fruits to your doorstep with the highest quality and service.</p>
        <div className="image-holder mission-image">
        </div>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>Started in 2020, we have been committed to providing the freshest produce to our community...</p>
        <div className="image-holder story-image">
          <img src=''/>
        </div>
      </section>

      <section className="team-introduction">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className='teamimage'>

            </div>
            <h3>Akshay and Isha</h3>
            <p>Founder & CEO</p>
          </div>
          
        </div>
      </section>

      <section className="unique-selling-proposition">
        <h2>What Makes Us Unique</h2>
        <p>We use eco-friendly packaging and source our produce from local farms...</p>
        <div className="image-holder usp-image">
          <img src="" alt="" />
        </div>
      </section>

      <section className="social-proof">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Genuine service! No time passers allowed."</p>
          </div>
          {/* Add more testimonials */}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;


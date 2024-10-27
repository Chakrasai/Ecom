import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { IoLocation } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaInfoCircle, FaCartPlus } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import './Home.css';

const products = [
  { id: 1, name: 'capcicum', price: '$20', imgSrc: 'https://i.postimg.cc/fbv2MJtF/product-1.jpg' },
  { id: 2, name: 'strawberry', price: '$25', imgSrc: 'https://i.postimg.cc/SxFD8Wc3/product-2.jpg' },
  { id: 3, name: 'beans', price: '$30', imgSrc: 'https://i.postimg.cc/G25jpYcM/product-3.jpg' },
  { id: 4, name: 'cabbage', price: '$35', imgSrc: 'https://i.postimg.cc/28vgPjGp/product-4.jpg' },
  { id: 5, name: 'tamato', price: '$40', imgSrc: 'https://i.postimg.cc/mrZqzYsR/product-5.jpg' },
  { id: 6, name: 'brocoly', price: '$45', imgSrc: 'https://i.postimg.cc/85j0wTc0/product-6.jpg' },
  { id: 6, name: 'carrat', price: '$45', imgSrc: 'https://i.postimg.cc/859n0xrP/product-7.jpg' },
  { id: 6, name: 'juices', price: '$45', imgSrc: 'https://i.postimg.cc/859n0xrP/product-7.jpg' },
];
const Productscard = ({product}) => (
  <div className="product-card-items">
    <img src={product.imgSrc} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Price: {product.price}</p>
    <div className="icon-container">
      <span><FaInfoCircle /></span>
      <span><FaCartPlus /></span>
    </div>
  </div>

)


function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className='content-container'>
      <header className='content-header'>
        <nav className='content-nav'>
          <div className='head-logo'>
            <span id='logo-e'>E</span><span id='dot'>.</span><span id='logo-m'>MANDI</span>
          </div>
          <div className='location-details'>
          <IoLocation />Hyderabad
          </div>
          <div className='search-box'>
            <span className='search-icon'><FaSearch /></span>
            <input className='search' placeholder='Search item' type='search' />
          </div>
          <div className='shop-details'>
            <span><FaCartShopping />
            </span>
            <span>Cart</span>
          </div>
        </nav>

        <nav className='categories-nav'>
          
          <ul>
            <li>Groceries</li>
            <li>Fruits</li>
            <li>Home & Kitchen Needs</li>
            <li>Wellness</li>
            <li>Others</li>
          </ul>
        </nav>
      </header>

      <section className='carousel-section'>
        <Slider {...sliderSettings}>
          <div className='carousel-slide'>
            <img src="slide1.png" alt="Slide 1" />
          </div>
          <div className='carousel-slide'>
            <img src="slide2.png" alt="Slide 2" />
          </div>
          <div className='carousel-slide'>
            <img src="slide1.png" alt="Slide 3" />
          </div>
        </Slider>
      </section>
      <section className='qdetails-section'> 
        <div className='qdetails-container'>
          <div className='qdetails-items'>
            <img src="https://i.postimg.cc/rwF5YLZW/free-shopping.png" alt="free shoping" />
            <h3>FREE SHIPPING</h3>
            <p>on order over 1000</p>
          </div>
          <div className='qdetails-items'>
            <img src="https://i.postimg.cc/qvbyPZWF/Screenshot-2024-06-29-191514.png" alt="fresh" />
            <h3>ALWAYS FRESH</h3>
            <p>product well package</p>
          </div>
          <div className='qdetails-items'>
            <img src="https://i.postimg.cc/J05BPTbP/Screenshot-2024-06-29-191530.png" alt="quality" />
            <h3>SUPERIOR QUALITY</h3>
            <p>quality products</p>
          </div>
          <div className='qdetails-items'>
            <img src="https://i.postimg.cc/J05BPTbP/Screenshot-2024-06-29-191530.png" alt="support" />
            <h3>SUPPORT</h3>
            <p>24/7 support</p>
          </div>
        </div>
      </section>
      <section className='cdetails-section'>
        <div className='cdetails-container'>
          <div className='cdetails-col1'>
          <div className='cdetails-items'>
            <img src="https://i.postimg.cc/dtqKXW2r/Fresh-Fruit-Basket-Gold-800x.webp" alt="juices" />
            <h3>JUICES</h3>
          </div>
          <div className='cdetails-items'>
            <h3>Vegetables</h3>
            <p>protct the health of your home</p>
            <button>Shop now</button>
          </div>
          <div className='cdetails-items'>
            <img src="https://i.postimg.cc/MKZhtnwY/avasflowers-bon-appetit-fruit-basket-max.jpg" alt="FRUITS" />
            <h3>FRUITS</h3>
          </div>
          </div>
          <div className='cdetails-col2'>
          <div className='cdetails-items'>
            <img src="https://i.postimg.cc/GmVVczyM/istockphoto-184300090-612x612.jpg" alt="VEGETABLES" />
            <h3>VEGETABLES</h3>
          </div>
          <div className='cdetails-items'>
            <img src="https://i.postimg.cc/MKZhtnwY/avasflowers-bon-appetit-fruit-basket-max.jpg" alt="FREE" />
          </div>
          <div className='cdetails-items'>
            <img src="https://i.postimg.cc/NFBZ3MHB/4374.jpg" alt="dry" />
            <h3>DRIED</h3>
          </div>
          </div>
        </div>

      </section>
      <section className='pdetails-section'>
        <div className='products-label'>
          <p>OUR PRODUCTS</p>
          <h3>featured products</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
      </section>     
      <section className='product-cards-section'>
        <div className='product-cards-container'>
          {
            products.map((product) => (
              <Productscard key={product.id} product={product} />
            ))
          }
        </div>
      </section>
      <section className='hero-section'>
        <div className='hero-container'>
          <div className='hero-items'>
            <h3>Deal of the day</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <button>Shop now</button>
          </div>
        </div>
      </section>
      <section className='contact-details-section'>
        <div className='contact-details-items'>
          <h2>Subcribe to our Newsletter</h2>
          <p>Get e-mail updates about our latest shops and special offers</p>
        </div>
        <div className='contact-details-items'>
          <div className='input-area'>
          <input type='text' placeholder='Enter your email address' />
          <button>Subscribe</button></div>
        </div>
      </section>
      <footer className='footer-section'>
      <div className='footer-container'>
        {/* Company Info */}
        <div className='footer-info'>
          <h3>About Us</h3>
          <p>
            We are committed to providing the best products and services. Our goal is to meet your needs and exceed your expectations.
          </p>
        </div>

        {/* Quick Links */}
        <div className='footer-links'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/privacy'>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className='footer-social'>
          <h3>Follow Us</h3>
          <div className='social-icons'>
            <a href='https://facebook.com' aria-label='Facebook' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
            <a href='https://twitter.com' aria-label='Twitter' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
            <a href='https://instagram.com' aria-label='Instagram' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
            <a href='https://linkedin.com' aria-label='LinkedIn' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
          </div>
        </div>

        {/* Subscription Form */}
        <div className='footer-subscription'>
          <h3>Subscribe to our Newsletter</h3>
          <form>
            <input type='email' placeholder='Enter your email' required />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>

    </div>
  );
}

export default Home;

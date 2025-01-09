import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import bannerImage from '../images/banner.jpg';
import productImage1 from '../images/product1.jpg';
import productImage2 from '../images/product2.jpg';
import productImage3 from '../images/product3.jpg';
import productImage4 from '../images/product4.jpg';
import productImage5 from '../images/product5.jpg';
import productImage6 from '../images/product6.jpg';
import productImage7 from '../images/product7.jpg';
import productImage8 from '../images/product8.jpg';
import productImage9 from '../images/product9.jpg';
import Logo from '../images/logo.jpg';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showCart, setShowCart] = useState(false);


  

  const products = [
    { id: 1, image: productImage1, description: "Dahi Pohe", price: 25 },
    { id: 2, image: productImage2, description: "Tarri Pohe", price: 20 },
    { id: 3, image: productImage3, description: "Indori Pohe", price: 20 },
    { id: 4, image: productImage4, description: "Kande Pohe", price: 20 },
    { id: 5, image: productImage5, description: "Kokani Pohe", price: 20 },
    { id: 6, image: productImage6, description: "Kurkure Pohe", price: 20 },
    { id: 7, image: productImage7, description: "Matki Pohe", price: 25 },
    { id: 8, image: productImage8, description: "Sambar Pohe", price: 20 },
    { id: 9, image: productImage9, description: "Dadpe Pohe", price: 20 },
  ];

  // Handle Add to Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Handle Empty Cart and Navigate to Home
  const emptyCart = () => {
    setCart([]);
    setShowCart(false); // Navigate back to the home content
  };

  // Handle Contact Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server.");
    }
  };

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Scroll to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="body">
{/* Navbar */}
<nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
    {/* Brand Logo */}
    <a className="navbar-brand d-flex align-items-center" href="#home">
      <img
        src={Logo}
        alt="Logo"
        className="img-fluid" // Make the logo responsive
        style={{
          height: "50px", // Adjust the logo size based on screen size using Bootstrap
          width: "auto",
        }}
      />
    </a>

    {/* Navbar Links */}
    <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center mb-2 mb-md-0 gap-3 flex-grow-1">
      <li className="nav-item">
        <a
          className="nav-link text-center"
          href="#home"
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link text-center"
          href="#menu"
          onClick={() => scrollToSection("menu")}
        >
          Menu
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link text-center"
          href="#about"
          onClick={() => scrollToSection("about")}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link text-center"
          href="#contact"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </a>
      </li>
    </ul>

    {/* View Cart Button */}
    <button
      className="btn btn-outline-primary"
      onClick={() => setShowCart(true)}
    >
      View Cart <span className="ms-2">({cart.length})</span>
    </button>
  </div>
</nav>









      {/* Main Sections */}
      {!showCart && (
        <div>
            {/* Banner Image */}
          <section id="home" className="mt-5">
            <div className="container">
              <h1>Welcome To Sudamache Pohe</h1>
              <img
                src={bannerImage}
                alt="Sudamache Pohe Banner"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
          </section>

          <section id="menu" className="mt-5">
            <div className="container">
              <h2>Menu</h2>
              <div className="row">
                {products.map((product) => (
                  <div className="col-md-4" key={product.id}>
                    <div className="card mb-4">
                    <img src={product.image} className="card-img-top" alt={product.name} style={{height:"200px"}}/>
                      <div className="card-body">
                        
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">₹{product.price}</p>
                        <button
                          className="btn btn-primary"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="mt-5">
            <div className="container">
              <h2>About Us</h2>
              <p>* Sudamache Pohe Private Limited is an unlisted private company incorporated on 13 April, 2021. It is classified as a private limited company and is located in Pune, Maharashtra.

                 * Sudamache Pohe Private Limited has two directors - Babasaheb Pralhad Bhosale and Sandesh Babasaheb Bhosale.

                 * The longest serving directors currently on board are Babasaheb Pralhad Bhosale and Sandesh Babasaheb Bhosale who were appointed on 13 April, 2021. They have been on the board for 3 years and 3 months.</p>
            </div>
          </section>

          <section id="contact" className="mt-5">
            <div className="container">
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </section>
          <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/sudamachepohepune/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://x.com/sudmachepohe" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.instagram.com/sudamache_pohe_official/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
        </div>
      )}

      {showCart && (
        <section id="cart">
          <div className="container mt-5">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                <ul className="list-group mb-3">
                  {cart.map((item, index) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={index}
                    >
                      <img src={item.image} alt={item.description} style={{ width: "50px", height: "50px" }} />
                      {item.description} - ₹{item.price}
                    </li>
                  ))}
                </ul>
                <h4>Total: ₹{totalPrice}</h4>
                <button className="btn btn-danger" onClick={emptyCart}>
                  Empty Cart
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;

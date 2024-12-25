import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Banner from './components/sections/Banner';
import Categories from './components/sections/Categories';
import NewArrivals from './components/sections/NewArrivals';
import AboutUs from './components/sections/AboutUs';
import BrandPartners from './components/sections/BrandPartners';
import CustomerReviews from './components/sections/CustomerReviews';
import ContactUs from './components/sections/ContactUs';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Banner />
          <Categories />
          <NewArrivals />
          <AboutUs />
          <BrandPartners />
          <CustomerReviews />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

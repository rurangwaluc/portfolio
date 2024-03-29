import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
// import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackTopBtn from './components/BackTopBtn';
import './App.scss';

const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      {/* <Services /> */}
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;

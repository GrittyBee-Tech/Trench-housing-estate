import React from 'react';
import Hero from './Hero';
import Featured from './Featured';
import Properties from './Properties';
import News from './News';
import Testimonial from './Testimonial';
import Faq from './Faq';
import Subscribe from './Subscribe';
import Footer from '../generic-layout/Footer';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Properties />
      {/* <Connect /> */}
      <News />
      <Testimonial />
      {/* <Faq /> */}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default LandingPage;

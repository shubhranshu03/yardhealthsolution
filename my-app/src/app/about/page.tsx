"use client";

import React from 'react';
import Hero from './Hero';
import AboutFeatures from './AboutFeatures';
import Our from './Our';
import WhyChoose from './WhyChoose';
import Header from '../Component/Header';
import Footer from '../Component/Foter';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <AboutFeatures />
      <Our />
      <WhyChoose />
      <Footer/>
      
    </div>
  );
};

export default AboutPage;

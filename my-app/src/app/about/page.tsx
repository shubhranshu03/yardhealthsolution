"use client";

import React from 'react';
import Hero from './Hero';
import AboutFeatures from './AboutFeatures';
import Our from './Our';
import Header from '../Component/Header';


const AboutPage = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <AboutFeatures />
      <Our/>
    </div>
  );
};

export default AboutPage;

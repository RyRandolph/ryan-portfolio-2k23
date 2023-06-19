"use client"; // This is a client component

import '../app/globals.css'
import React, { useEffect } from 'react';
import classes from '../styles/pages/parallaxPage2.module.css';
import ParralaxGridContent from '@/app/components/parallaxImagesContent';
import ParallaxSkillsContent from '@/app/components/parallaxSkillsContent';
import DescriptionContent1 from '@/app/components/descriptionContent1';
import WorkHistory from '@/app/components/workHistory';

const ParallaxPage: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('handleScroll')
      const parallaxElements = document.querySelectorAll('.parallax-element');
      for (const element of parallaxElements) {
        const distance = element.getBoundingClientRect().top;
        element.style.transform = `translateY(${distance * 0.2}px)`; // Adjust the parallax effect speed as desired
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    <header
      className={`${classes['bg_fractal_flower']} flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover`}
    >
      <ParralaxGridContent />
      {/*<!-- <div className="p-5 text-2xl text-white bg-orange-300 bg-opacity-50 rounded-xl"> 
        Welcome to my site!
      </div>
      */}
    </header>
    <div className="max-w-lg m-auto">
      <DescriptionContent1 />
    </div>
    <section
    className={`${classes['bg_kaleida_neon']} flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover`}>
      
        <ParallaxSkillsContent />
    </section>
    <div className="max-w-lg m-auto">
      <WorkHistory />
    </div>
    </div>
  );
};

export default ParallaxPage;
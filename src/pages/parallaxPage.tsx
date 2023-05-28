"use client"; // This is a client component

import React, { useEffect } from 'react';
import classes from '../../styles/pages/parallaxPage.modules.css';

const ParallaxPage: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-element');
      for (const element of parallaxElements) {
        const distance = element.getBoundingClientRect().top;
        element.style.transform = `translateY(${distance * 0.5}px)`; // Adjust the parallax effect speed as desired
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='parallax-container'>
      <div className="parallax-element">
        <img src="/images/Background-1.jpeg" alt="Image 1" />
      </div>
      <div className="parallax-element">
        <img src="/images/Background-2.jpeg" alt="Image 2" />
      </div>
      <div className="parallax-element">
        <img src="/images/Background-3.jpeg" alt="Image 3" />
      </div>
      <div className="parallax-content">
        <h1>Parallax Scrolling Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor nunc dolor, vel dapibus ex ultrices id. Maecenas sit amet bibendum est. Nullam eu lobortis lacus.</p>
      </div>
      <div className="parallax-content">
        <h1>2Parallax Scrolling Page2</h1>
        <p>2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor nunc dolor, vel dapibus ex ultrices id. Maecenas sit amet bibendum est. Nullam eu lobortis lacus.2</p>
      </div>

    </div>
  );
};

export default ParallaxPage;
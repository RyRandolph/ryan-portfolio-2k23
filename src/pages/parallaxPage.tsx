"use client"; // This is a client component

import '../app/globals.css'
import React, { useEffect } from 'react';
import classes from '../styles/pages/parallaxPage.modules.css';

const ParallaxPage: React.FC = () => {

  const handleScroll = () => {
    console.log('handleScroll')
    const parallaxElements = document.querySelectorAll('.parallax-element');
    for (const element of parallaxElements) {
      console.log('element: ', element)
      const distance = element.getBoundingClientRect().top;
      element.style.transform = `translateY(${distance * 0.5}px)`; // Adjust the parallax effect speed as desired
    }
  };

  useEffect(() => {
    console.log('useEffect')
    

    console.log('useEffect - addEventListener', window.addEventListener)
    console.log('useEffect - querySelector', document.getElementById('__next'));
    const nextContainer = document.getElementById('__next')
    nextContainer.addEventListener('scroll', handleScroll, true);

    const parallaxContainer = document.querySelector('.contentBlock');
    console.log('useEffect - addEventListener', parallaxContainer)
    parallaxContainer.addEventListener('scroll', handleScroll, true);

    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      parallaxContainer.removeEventListener('scroll', handleScroll);
      nextContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='contentBlock' onScroll={handleScroll}>
    <div className={`${classes['parallax-container']} parallax-container`} onScroll={handleScroll}>
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
    </div>
  );
};

export default ParallaxPage;
import React from 'react';
import classes from '../../styles/components/parallaxGridContent.module.css';


const ParralaxGridContent: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-1 grid md:grid-cols-3 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-3 gap-4 p-4">
        <div className="hidden md:block">
          <div className={`flex items-center justify-center h-full opacity-90`}>
            <img src='/images/portrait/steampunk1.png' />
          </div>
        </div>
        <div className="hidden md:block" /> 
        <div className="hidden md:block" />
        <div className="hidden md:block" />
        <div className={`text-8xl`}>
          <div className={`${classes['font-cursive']} flex items-center justify-center h-full`}>Ryan <br/><br/>Randolph</div>
        </div>
        <div className="hidden md:block" />
        <div className="hidden md:block" />
        <div className="hidden md:block" />
        <div className={`hidden md:block ${classes['crop-container']}`}>
          <div className={` ${classes['crop-image']}`}></div>
        </div>
      </div>
    </div>
  );
};

export default ParralaxGridContent;
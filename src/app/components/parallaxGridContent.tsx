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
        <div className="bg-orange-400 bg-opacity-50">Content 2</div>
        <div className="hidden md:block bg-orange-600 bg-opacity-50">Content 3</div>
        <div className="bg-orange-200 bg-opacity-50">Content 4</div>
        <div className={`hidden md:block text-8xl`}>
          <div className={`${classes['font-cursive']} flex items-center justify-center h-full`}>Ryan <br/><br/>Randolph</div>
        </div>
        <div className="hidden md:block bg-orange-400 bg-opacity-50">Content 6</div>
        <div className="hidden md:block bg-orange-600 bg-opacity-50">Content 7</div>
        <div className="bg-orange-800 bg-opacity-50">Content 8</div>
        <div className="hidden md:block">
          <div className={`flex items-center justify-center h-full opacity-90`}>
            <img className={`${classes['image-space']} `} src='/images/portrait/modern1.png' />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ParralaxGridContent;
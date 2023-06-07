import React from 'react';
import classes from '../../styles/components/parallaxGridContent.modules.css';


const ParralaxGridContent: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-1 grid md:grid-cols-3 md:grid-rows-3 sm:grid-cols-1 sm:grid-rows-3 gap-4 p-4">
        <div className="hidden md:block bg-orange-200 bg-opacity-50">Content 1</div>
        <div className="bg-orange-400 bg-opacity-50">Content 2</div>
        <div className="hidden md:block bg-orange-600 bg-opacity-50">Content 3</div>
        <div className={`hidden md:block bg-orange-800 bg-opacity-50 font-cursive`}>Ryan Randolph</div>
        <div className="bg-orange-200 bg-opacity-50">Content 5</div>
        <div className="hidden md:block bg-orange-400 bg-opacity-50">Content 6</div>
        <div className="hidden md:block bg-orange-600 bg-opacity-50">Content 7</div>
        <div className="bg-orange-800 bg-opacity-50">Content 8</div>
        <div className="hidden md:block bg-orange-200 bg-opacity-50">Content 9</div>
      </div>
    </div>
  );
};

export default ParralaxGridContent;
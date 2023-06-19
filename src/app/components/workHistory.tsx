import React from 'react';
import classes from '../../styles/components/workHistory.module.css';

const WorkHistoryContent: React.FC = () => {
    /* coding journey
    * Teaching self Basic on my IBM PC Jr
    * Writing my first non trivial program on paper during a 24 hour road trip from OK to CA
    * Full of GOTO's like crazy, but hey, I was a newbie programming teenager
    * Oklahoma State University
    * My favorite meemory was my intro to coding class.  PASCAL.  In a class of probably a couple 
    * hundred students, checking posted test scores.  And I shared the top score, setting the curve.
    * Blew my mind, I never considered myself an elite student... but I kinda figured I'd found my calling.
    * 
    * Graduated with Honors in the CS program
    */
  return (
    <React.Fragment>
    <div className={`${classes['grid-container']}`}>
      <div className={`${classes['grid-item']}`}>
        <img src='/images/OSU_Logo.png' />
      </div>
      <div className={`${classes['grid-item']}`}>
        <p className={`${classes['intro-text']} text-xl mb-4`}>
          Oklahoma State University
        </p>
        <p>Text 1</p>
      </div>
      <div className={`${classes['grid-item']}`}>
        <p>Text 2</p>
      </div>
      <div className={`${classes['grid-item']}`}>
        <img src='/images/IBM_Logo.png' />
      </div>
      <div className={`${classes['grid-item']}`}>
        <img src='/images/Lenovo_Logo.png' />
      </div>
      <div className={`${classes['grid-item']}`}>
        <p>Text 3</p>
      </div>
      <div className={`${classes['grid-item']}`}>
        <p>Text 4</p>
      </div>
      <div className={`${classes['grid-item']}`}>
        <img src='/images/IBM_Logo.png' />
      </div>
    </div>
        
    </React.Fragment>
  );
};

export default WorkHistoryContent;

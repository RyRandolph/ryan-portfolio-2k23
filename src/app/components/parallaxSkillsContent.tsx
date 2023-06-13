import React from 'react';
import classes from '../../styles/components/parallaxGridContent.module.css';


const ParralaxSkillsContent: React.FC = () => {
  const skillsList = [
    "React",
    "Javascript",
    "Html/CSS",
    "Leadership", // 4
    "Agile",
    "Java",
    "Github",
    "Python", // 8
    "API Development",
    "REST",
    "NodeJS / Express",
    "Rest", // 12
    "Svelte",
    "Clean Coding",
    "MongoDB",
    "GraphQL", // 16
    "Typescript",
    "CI / CD",
    "Microservices Architecture "
  ];

  const renderSkillItems = () => {
    let skillJSX = [];
    for (let i = 0; i < skillsList.length; i++) {
      const randomNumber = Math.floor(Math.random() * 8) + 1;
      console.log(randomNumber);
      const shimmyClass = classes[`shimmy-${randomNumber}`];
      skillJSX[i] = (<span className={`${classes['font-cursive']} ${shimmyClass} text-3xl text-orange-300 flex items-center justify-center h-full`}>{skillsList[i]}</span>) 
    }
    return skillJSX;
  }

  return (
    <div className="flex flex-col h-screen w-screen">
        <div className={`flex-1 grid grid-cols-6 grid-rows-3 gap-4 p-4`}>
        {renderSkillItems()}
      </div>
    </div>
  );
};

export default ParralaxSkillsContent;
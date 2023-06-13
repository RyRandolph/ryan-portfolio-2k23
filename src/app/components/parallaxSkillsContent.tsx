import React from 'react';
import classes from '../../styles/components/parallaxGridContent.module.css';


const ParralaxSkillsContent: React.FC = () => {
  const skillsList = [
    "Web Application Development",
    "React",
    "Javascript",
    "Html/CSS",
    "Leadership", // 5
    "Full Stack Development",
    "Microservices Architecture", 
    "Agile",
    "Java",
    "Clean Coding", // 10
    "Github",
    "Python", // 
    "API Development",
    "REST",
    "NodeJS / Express", // 15
    "Rest", // 
    "Svelte",
    "MongoDB",
    "GraphQL", // 
    "Typescript", // 20
    "CI / CD",
    "Accessibility",
    "User Experience", //23
    "so much more..."
  ];

  const renderSkillItems = () => {
    let skillJSX = [];
    for (let i = 0; i < skillsList.length; i++) {
      const randomNumber = Math.floor(Math.random() * 12) + 1;
      console.log(randomNumber);
      const shimmyClass = classes[`shimmy-${randomNumber}`];
      skillJSX[i] = (<span className={`${classes['font-cursive']} ${shimmyClass} text-3xl text-orange-300 flex items-center justify-center h-full`}>{skillsList[i]}</span>) 
    }
    return skillJSX;
  }

  return (
    <div className="flex flex-col h-screen w-screen">
        <div className={`flex-1 grid sm:grid-cols-4 sm:grid-rows-6 md:grid-cols-6 md:grid-rows-4 gap-4 p-4 overflow-hidden`}>
        {renderSkillItems()}
      </div>
    </div>
  );
};

export default ParralaxSkillsContent;
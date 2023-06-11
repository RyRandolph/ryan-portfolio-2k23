import React from 'react';
import classes from '../../styles/components/descriptionContent.module.css';

const DescriptionContent1: React.FC = () => {
  return (
    <React.Fragment>
      <p className={`${classes['intro-text']} text-xl mb-4`}>
      I am a Software Engineering professional with 24 years of experience.  I 
      specialize in front-end and full-stack application development. I've got many 
      years of team leading experience as well.  I've got a lot of strengths
      stack development . My strengths include vast experience and trending skillsets. 
      I have achieved multiple technical awards from my employers and have delivered 
      many applications and functions over my career and am excited about bringing 
      value and sharing my creative passion in my next role.
      </p>
      <p className="mb-4">
      Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
      fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
      non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
      Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
      varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
      semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
      ipsum, id consequat nulla nunc in ligula.
      </p>
      <p className="mb-12">
      Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
      dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
      dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
      fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
      fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
      vitae scelerisque elit ultrices euz Donec eget sodales risus, quis dignissim
      neque.
      </p>
    </React.Fragment>
  );
};

export default DescriptionContent1;

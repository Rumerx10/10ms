import React from 'react';
import Cta from './Hero/Trailer/Cta';
import CheckLists from './Hero/Trailer/CheckLists';
import Contact from './Hero/Trailer/Contact';

const AboutCourse = () => {
  return (
    <div className="w-full">
      <div className="md:border">
        <div className="md:hidden lg:block">
          <Cta />
        </div>
        <CheckLists />
      </div>
      <Contact />
    </div>
  );
};

export default AboutCourse;

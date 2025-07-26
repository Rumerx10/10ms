'use client';

import React, { useEffect, useRef, useState } from 'react';
import Instructor from './Instructor';
import HowTheCourseLaidOut from './HowTheCourseLaidOut';
import Learnings from './Learnings';
import CourseExclusiveFeatures from './CourseExclusiveFeature/CourseExclusiveFeatures';
import CourseDetails from './CourseDetails';
import SectionSwitch from './SectionSwitch';
import AboutCourse from '../AboutCourse';
import IeltsScoreGuideline from './IeltsScoreGuideline ';
import Cta from '../Hero/Trailer/Cta';

const MainContainer = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [showCta, setCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowSidebar(scrollY >= 1200);
      setCta(scrollY>=762);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full pb-5 lg:pb-20 flex items-start justify-center">
      <div className="container flex gap-12" ref={containerRef}>
        {/* Left */}
        <div className="md:max-w-[504px] lg:max-w-[720px] w-full">
          <SectionSwitch />
          <Instructor />
          <HowTheCourseLaidOut />
          <IeltsScoreGuideline />
          <Learnings />
          <CourseExclusiveFeatures />
          <CourseDetails />
        </div>

        {/* Right */}
        <div
          ref={sidebarRef}
          className={`hidden md:block w-[398px] transition-opacity duration-300 ${
            showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="sticky top-[100px]">
            <AboutCourse />
          </div>
        </div>
      </div>
      <div className={`${showCta?'fixed bg-white bottom-0 left-0 right-0':'hidden'}`}>
        <Cta showCta={showCta} />
      </div>
    </section>
  );
};

export default MainContainer;

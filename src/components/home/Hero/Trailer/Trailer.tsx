import React from 'react';
import CheckLists from './CheckLists';
import Cta from './Cta';
import Contact from './Contact';
import TrailerVideo from './TrailerCarousel';


const Trailer = () => {
  return (
    <section className="z-40 w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-4 md:top-48">
      <div className="md:sticky md:top-[112px]">
        <div className="md:border">
          <div className="hidden p-1 md:block">
            <TrailerVideo />
          </div>
          <Cta />
          <div className='hidden md:block'><CheckLists /></div>
        </div>
        <Contact />
      </div>
    </section>
  );
};

export default Trailer;

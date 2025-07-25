import React from 'react';
import CheckLists from './CheckLists';
import Cta from './Cta';
import Contact from './Contact';
import TrailerCarousel from './TrailerCarousel';

const Trailer = () => {
  return (
    <section className="z-40 w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 top-0">
      <div className="md:sticky md:top-[112px]">
        <div className="md:border">
          <div className="hidden p-1 md:block" id="">
            <TrailerCarousel />
          </div>
          <Cta />
          <CheckLists />
        </div>
        <Contact />
      </div>
    </section>
  );
};

export default Trailer;

{
  /* <div className="thumb-wrap border-red-500 border-2">
  <div>
    <div
      className="overflow-hidden opacity-100 transition-opacity duration-300 ease-in-out"
      style={{ fontSize: '0px', objectFit: 'cover', opacity: 1 }}
    >
      <img
        alt="IELTS Course by Munzereen Shahid"
        src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
        fetchPriority="high"
        width="867"
        height="480"
        decoding="async"
        className="w-full"
        style={{ color: 'transparent' }}
      />
    </div>
  </div>
</div> */
}

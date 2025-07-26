import React from 'react';
import CtaContent from './CtaContent';

const Cta = ({ showCta }: { showCta?: boolean }) => {
  return (
    <div
      className={`w-full p-4 md:h-auto ${showCta ? 'fixed lg:hidden bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)]' : 'hidden md:block'}`}
      id="variant"
    >
      <CtaContent />
    </div>
  );
};

export default Cta;

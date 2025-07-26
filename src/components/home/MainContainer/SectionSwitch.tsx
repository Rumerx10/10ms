'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const tabs = [
  { id: 'instructors', label: 'Course instructor' },
  { id: 'features', label: 'How the course is laid out' },
  { id: 'pointers', label: 'What you will learn by doing the course' },
  { id: 'instructor', label: 'Course Exclusive Feature' },
  { id: 'requirements', label: 'Course details' },
];

const SectionSwitch = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (tab: string, idx: number) => {
    document
      .getElementById(tab.toLowerCase().replace(/\s+/g, '-'))
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setSelectedTab(idx);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('section-tabs');
    if (!container) return;

    const scrollAmount = 200;
    if (direction === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollIndex(scrollIndex + 1);
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setScrollIndex(Math.max(scrollIndex - 1, 0));
    }
  };

  return (
    <div className="sticky top-[65px] z-20 hidden bg-white md:block">
      <div className="relative w-full">
        <div id="section-tabs" className="relative flex flex-nowrap overflow-hidden scroll-smooth">
          <ul className="flex py-2 my-2 gap-4 px-4 border-b w-full min-w-max">
            {tabs.map((tab, idx) => (
              <li key={idx} className="snap-start shrink-0">
                <Link
                  href={`#${tab.id}`}
                  className={`p-2 border-b-2 ${idx === selectedTab ? 'border-[#1cab55]' : 'border-transparent'}  text-base text-gray-600 whitespace-nowrap hover:text-black`}
                  onClick={() => handleTabClick(tab.id, idx)}
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Right arrow */}
        <div
          className={`absolute z-50 bg-gray-400  rounded-full -right-10 top-1/2 -translate-y-1/2 ${
            scrollIndex === 7 ? 'pointer-events-none opacity-10' : ''
          } hidden xl:block cursor-pointer`}
          onClick={() => handleScroll('right')}
        >
          <ChevronRight className="w-8 h-8  text-white" />
        </div>

        {/* Left arrow */}
        <div
          className={`absolute z-50 bg-gray-400  rounded-full -left-10 top-1/2 -translate-y-1/2  ${
            scrollIndex === 0 ? 'pointer-events-none opacity-10' : ''
          } hidden xl:block cursor-pointer`}
          onClick={() => handleScroll('left')}
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default SectionSwitch;

import Image from 'next/image';
import React from 'react';

const CheckLists = () => {
  const checklist = [
    {
      color: 'black',
      icon: '/checklist/1.jpg',
      id: 'meta64Ckyd1YRb1719741712652',
      list_page_visibility: true,
      text: 'Total Enrolled 32995',
    },
    {
      color: 'black',
      icon: '/checklist/2.jpg',
      id: 'metaCCDbAAumOD1719741712652',
      list_page_visibility: false,
      text: 'Time Required 50 hours',
    },
    {
      color: 'black',
      icon: '/checklist/3.jpg',
      id: 'metaKc4SuylDeM1719741712652',
      list_page_visibility: true,
      text: '54 Videos',
    },
    {
      color: 'black',
      icon: '/checklist/4.jpg',
      id: 'metajKYau1Xq2M1719741712652',
      list_page_visibility: false,
      text: '10 Reading & 10 Listening Mocktests',
    },
    {
      color: 'black',
      icon: '/checklist/5.jpg',
      id: 'metayIP949ZIWE1719741712652',
      list_page_visibility: false,
      text: '38 Lecture Sheets',
    },
    {
      color: 'black',
      icon: '/checklist/6.jpg',
      id: 'metaRDOD1IqfGY1719741712652',
      list_page_visibility: false,
      text: '25 Video Lectures',
    },
    {
      color: 'black',
      icon: '/checklist/7.jpg',
      id: 'metaeV6gonz1Uz1719741712652',
      list_page_visibility: false,
      text: '1 Free Hardcopy Book Delivered',
    },
    {
      color: 'black',
      icon: '/checklist/8.jpg',
      id: 'metagw8Tp7dq3a1719741712652',
      list_page_visibility: false,
      text: 'Facebook Support Group',
    },
    {
      color: 'black',
      icon: '/checklist/9.jpg',
      id: 'metaWq2pVEViVv1719741712652',
      list_page_visibility: false,
      text: 'Course Validity Lifetime',
    },
  ];

  return (
    <div className="hidden md:block">
      <div className="grid py-2 md:p-4">
        <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
        {checklist.map((item, index) => (
          <div key={index}>
            <div className="flex items-center mb-3 leading-5">
              <div
                className="inline-block h-[20px] w-[20px] opacity-100 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: '0px', opacity: 1 }}
              >
                <Image
                  alt="icon"
                  src={item.icon}
                  width={20}
                  height={20}
                />
              </div>
              <p className="font-normal text-[#111827] pl-4">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckLists;

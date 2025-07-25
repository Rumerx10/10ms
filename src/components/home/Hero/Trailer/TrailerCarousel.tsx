'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import VideoPlayer from './VideoPlayer';
import PlayIconSmSvg from '@/svg/PlayIconSmSvg';

const TrailerCarousel = () => {
  const media = [
    {
      name: 'preview_gallery',
      resource_type: 'video',
      resource_value: 'zrlYnaZftEQ',
      thumbnail_url: 'https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png',
    },
    {
      name: 'preview_gallery',
      resource_type: 'image',
      resource_value:
        'https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png',
      thumbnail_url:
        'https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png',
    },
    {
      name: 'preview_gallery',
      resource_type: 'image',
      resource_value:
        'https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png',
      thumbnail_url:
        'https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png',
    },
    {
      name: 'preview_gallery',
      resource_type: 'video',
      resource_value: '30y-wlDtIIQ',
      thumbnail_url:
        'https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg',
    },
    {
      name: 'preview_gallery',
      resource_type: 'video',
      resource_value: 'QBz8FX4GE_w',
      thumbnail_url:
        'https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg',
    },
    {
      name: 'preview_gallery',
      resource_type: 'video',
      resource_value: 'AvB2ibYd1z4',
      thumbnail_url:
        'https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg',
    },
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="relative bg-white w-[390px] h-[290px] youtube-video aspect-video">
        <div className="relative">
          <div className="w-full h-full">
            <div className="flex flex-col w-full h-full">
              <div className="relative">
                <Swiper
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="h-56 w-full"
                  onSwiper={setMainSwiper}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                  {media.map((item, index) => (
                    <SwiperSlide key={index}>
                      {item.resource_type === 'video' ? (
                        <VideoPlayer
                          videoId={item.resource_value}
                          videoPoster={item.thumbnail_url}
                        />
                      ) : (
                        <img alt={item.name} src={item.thumbnail_url || '/default-thumbnail.png'} />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation button  */}
                <button
                  onClick={() => mainSwiper?.slidePrev()}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white transition-colors"
                >
                  <IoIosArrowDropleftCircle size={30} />
                </button>
                <button
                  onClick={() => mainSwiper?.slideNext()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white transition-colors"
                >
                  <IoIosArrowDroprightCircle size={30} />
                </button>
              </div>

              <div className="p-4">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={16}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="w-full"
                >
                  {media.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={`flex border-2 ${
                          activeIndex === index
                            ? 'rounded-sm overflow-hidden border-[#1cab55]'
                            : 'border-transparent'
                        } h-8 w-14 items-center justify-center cursor-pointer`}
                        onClick={() => {
                          mainSwiper?.slideTo(index);
                        }}
                      >
                        {item.resource_type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="h-5 w-5 flex items-center justify-center">
                              <PlayIconSmSvg />
                            </div>
                          </div>
                        )}
                        <img
                          src={item.thumbnail_url || '/default-thumbnail.png'}
                          className="w-full h-full object-cover"
                          alt={item.name}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrailerCarousel;

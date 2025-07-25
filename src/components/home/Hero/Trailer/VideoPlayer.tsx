'use client';
import PlayButtonSvg from '@/svg/PlayButtonSvg';
import React, { useState } from 'react';

const VideoPlayer = ({ videoId, videoPoster }: { videoId: string; videoPoster: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full lg:w-full h-full overflow-hidden relative group">
      {!isPlaying ? (
        <>
          <div
            className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <PlayButtonSvg />
          </div>
          <img
            src={videoPoster || 'placeholder.svg'}
            alt="Video Poster"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </>
      ) : (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;

import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="video-title w-screen aspect-video pt-[25%] px-18 text-white absolute bg-gradient-to-r from-black">
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-xs w-1/4'>{overview}</p>
      <div>
      <button className="bg-white text-black p-1 w-20 rounded-md hover:bg-white/70 transition duration-200">
        ▶️ Play
      </button>   
        <button className='bg-gray-500 text-white p-1 w-30 mx-4 rounded-md'> ℹ More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
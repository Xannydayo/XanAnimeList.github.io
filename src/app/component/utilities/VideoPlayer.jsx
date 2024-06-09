'use client';
import { useState } from 'react';
import YouTube from 'react-youtube';
import Draggable from 'react-draggable';

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVideoPlayer = () => {
    setIsOpen(!isOpen);
  };

  const VideoOverlay = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <Draggable>
        <div className="relative bg-black rounded-lg shadow-lg">
          <button
            onClick={toggleVideoPlayer}
            className="absolute top-0 right-0 m-2 text-white bg-red-600 hover:bg-red-700 rounded-full px-3 py-1"
          >
            Close
          </button>
          <YouTube
            videoId={youtubeId}
            opts={{ playerVars: { autoplay: 1 } }}
            onReady={(event) => event.target.pauseVideo()}
            onError={() => alert('Video preview not available')}
            className="rounded-lg"
          />
        </div>
      </Draggable>
    </div>
  );

  const PreviewButton = () => (
    <button
      onClick={toggleVideoPlayer}
      className="w-32 bg-blue-500 text-white text-xl hover:bg-blue-700 transition-colors duration-300 ease-in-out shadow-lg rounded-lg"
    >
      Watch Preview
    </button>
  );

  return isOpen ? <VideoOverlay /> : <PreviewButton />;
};

export default VideoPlayer;

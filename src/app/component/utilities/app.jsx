import React from 'react';
import VideoPlayer from './VideoPlayer'; // Sesuaikan dengan path file yang sesuai

const App = () => {
  const youtubeId = 'wzv6hCXPUKk';

  return (
    <div>
      {/* Komponen VideoPlayer menerima youtubeId sebagai prop */}
      <VideoPlayer youtubeId={youtubeId} />
    </div>
  );
};

export default App;

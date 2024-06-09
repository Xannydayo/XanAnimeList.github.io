import React from 'react';
import FlareCursor from '@/app/FlareCursor';
import { getAnimeResponse } from '@/libs/api-libs';
import VideoPlayer from '@/app/component/utilities/VideoPlayer';

const Preview = async ({ params : { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  if (!anime) {
    return (
      <div>
        <FlareCursor />
        <h1>Anime not found</h1>
      </div>
    );
  }
  return (
    <div>
      
    </div>
  );
};

export default Preview;

import React from 'react';
import FlareCursor from '@/app/FlareCursor';
import { getAnimeResponse } from '@/libs/api-libs';
import VideoPlayer from '@/app/component/utilities/VideoPlayer';

const Page = async ({ params: { id } }) => {
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
    <div className="flex flex-col items-center">
      <div className="pt-4 px-4 text-center">
        <h3 className="text-black text-4xl">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex gap-4 text-black overflow-x-auto text-bold">
        <div className="w-36 flex flex-col justify-center items-center rounded border bg-black p-1 text-white text-xl shadow-md">
          <h2>PERINGKAT</h2>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border bg-black p-1 text-white text-xl shadow-md">
          <h2>SKOR</h2>
          <p>{anime.data.score}</p>
        </div>
      </div>

      <div className="flex gap-2 pt-4 px-4">
        <div className="flex flex-col justify-center items-center">
          <img
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={480}
            decoding="async"
            className="w-full h-auto object-cover max-w-full"
          />
          <br></br>
        </div>
      </div>
      <p className=" text-2xl text-center">
        {anime.data.duration} | {anime.data.episodes} Episodes
      </p>
      <div className="trailer">
        <div className="">
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
      </div>
      <div className="text-black px-4">
        <div className="">
          <div className="flex justify-center">
            <div className=" text-3xl text-black">
              <h1>Synopsis</h1>
              <br></br>
            </div>
          </div>
        </div>
        <p className=" text-l text-center ">{anime.data.synopsis}</p>
      </div>
      <br></br>
    </div>
  );
};

export default Page;

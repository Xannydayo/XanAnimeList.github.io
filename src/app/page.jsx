import AnimeList from '@/app/component/animelist';
import Header from './component/animelist/header';  
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from '@/libs/api-libs';
import VideoPlayer from './component/utilities/VideoPlayer';

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);

  const topAnime = await getAnimeResponse('top/anime', 'limit=12');
  let recommendedAnime = await getNestedAnimeResponse('recommendations/anime', 'entry');
  recommendedAnime = reproduce(recommendedAnime, 12);
  return (
    <>
      <section>
        <Header
          Title="Terpopuler"
          linkTitle="Show All"
          linkHref="/popular"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header Title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;

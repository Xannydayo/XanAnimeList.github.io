import AnimeList from '@/app/component/animelist';
import Header from '@/app/component/animelist/header';
import { getAnimeResponse } from '@/libs/api-libs';

const Page = async ({ params }) => {
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeResponse('anime', `q=${decodedKeyword}`);

  return (
    <>
      {/* anime populer */}
      <section>
        <Header Title={`hasil untuk ${decodedKeyword}...`} /> 
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;

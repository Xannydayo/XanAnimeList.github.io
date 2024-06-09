import Link from 'next/link';
import InputSearch from './inputSearch';
import UserActionButton from './UserActionButton';

const Navbar = () => {
  return (
    <header className="">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2 shadow-xl">
        <Link
          href="/"
          className="font-bold text-4xl text-gradient bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700 bg-clip-text text-transparent animate-gradient"
        >
          XanAnimeList
        </Link>
        <InputSearch />
        <UserActionButton/>
      </div>
    </header>
  );
};

export default Navbar;
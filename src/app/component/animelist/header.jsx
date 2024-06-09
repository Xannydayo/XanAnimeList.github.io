import Link from 'next/link';
import FlareCursor from '@/app/FlareCursor';

const Header = ({ Title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-black">{Title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md hover:text-orange-500 transition-all text-black"
        >
          <FlareCursor />
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;

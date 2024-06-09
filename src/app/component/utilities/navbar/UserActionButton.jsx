import Link from 'next/link';
import { authUserSession } from '@/libs/auth-libs';

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? 'Sign out' : 'Sign in';
  const actionURL = user ? '/api/auth/signout' : '/api/auth/signin';

  return (
    <div className='flex justify-between gap-2 '>
      {user ? <a className='transition-all hover:text-blue-400 bg-black text-white py-1 px-12 inline-block' href="/user/dashboard">dashboard</a> : null}
      <a
        href={actionURL}
        className="transition-all hover:text-blue-400 bg-black text-white py-1 px-12 inline-block"
      >
        {actionLabel}
      </a>
    </div>
  );
};

export default UserActionButton;

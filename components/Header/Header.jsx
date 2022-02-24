import { useSession } from 'next-auth/react';

const Header = ({ onClick }) => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-row w-auto h-16 justify-between px-4 bg-slate-500 text-white sticky top-0">
      <div className="flex flex-row px-2 space-x-4 justify-between">
        <img
          className="rounded-full h-12 self-center"
          src={session?.user.image}
          alt="User image"
        />
        <div className="self-center">{session?.user?.email}</div>
      </div>
      <button onClick={onClick} aria-label="sign out">
        Sign Out
      </button>
    </div>
  );
};

export default Header;

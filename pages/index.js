import { useSession, signIn, signOut } from 'next-auth/react';
import { SocialButton } from '../components/SocialButton/SocialButton';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex flex-row w-full p-2 justify-between">
        <div className="flex flex-row px-2 space-x-4 justify-between">
          <img
            className="rounded-full w-16"
            src={session.user.image}
            alt="User image"
          />
          <h2 className="font-bold text-lg self-center">
            {session.user.email}
          </h2>
        </div>
        <button className="px-2" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-screen">
      <h3 className="flex-none text-center text-lg sm:text-3xl p-4 font-bold text-slate-700">
        Welcome to the movie &amp; TV show tracker!
      </h3>
      <div className="grow flex flex-col justify-center w-full">
        <div className="p-4 space-y-4 self-center text-center">
          <span className="text-xl font-extrabold">
            Please sign in! <br />
          </span>
          <SocialButton
            className="login"
            textColor="text-white"
            buttonText="Sign in with Github!"
            buttonColor="bg-neutral-800"
            Icon={<FontAwesomeIcon icon={faGithub} alt="Github Icon" inverse />}
            onClick={() => signIn('github')}
          />
        </div>
      </div>
    </div>
  );
}

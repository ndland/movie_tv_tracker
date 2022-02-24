import { useSession, signIn, signOut } from 'next-auth/react';
import SocialButton from '../components/SocialButton/SocialButton';
import Header from '../components/Header/Header';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return <Header onClick={() => signOut()} session={session} />;
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

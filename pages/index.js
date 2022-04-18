import { useSession, signIn, signOut } from 'next-auth/react';
import SocialButton from '../components/SocialButton/SocialButton';
import Header from '../components/Header/Header';
import Poster from '../components/Poster/Poster';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MultipleMovieResponse } from '../components/Poster/Poster.stories';

export default function Home() {
  const { data: session } = useSession();
    console.info('Github ID: ', process.env.GITHUB_ID);
    console.info('Github Client Secret: ', process.env.GITHUB_SECRET);

  const onClick = (e) => {
    console.info('clicked the following: ', e);
  };

  if (session) {
    return (
      <>
        <Header onClick={() => signOut()} />
        <div className="container mx-auto mt-4">
          <div className="grid grid-cols-7 gap-3 h-screen">
            {MultipleMovieResponse.results.map((res) => (
              <Poster key={res.id} result={res} onClick={onClick} />
            ))}
          </div>
        </div>
      </>
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

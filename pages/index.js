import { useSession, signIn, signOut } from 'next-auth/react';
import { SocialButton } from '../components/SocialButton/SocialButton';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <img
          className="rounded-full"
          src={session.user.image}
          alt="User image"
        />
        <button className="unread-count" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <div className="flex flex-col justify-center w-full h-screen">
      <div className="p-4 space-y-4 self-center text-center">
        <span className="text-xl font-extrabold">
          Not signed in <br />
        </span>
        <SocialButton
          textColor="text-white"
          buttonText="Sign in with Github!"
          buttonColor="bg-neutral-800"
          Icon={<FontAwesomeIcon icon={faGithub} alt="Github Icon" inverse />}
          onClick={() => signIn('github')}
        />
      </div>
    </div>
  );
}

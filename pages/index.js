import { useSession, signIn, signOut } from 'next-auth/react';
import { SocialButton } from '../components/SocialButton/SocialButton';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
    <>
      Not signed in <br />
      <SocialButton
        socialPlatform="Github"
        icon={faGithub}
        altText="Github Icon"
        onClick={() => signIn('github')}
      />
    </>
  );
}

import React from 'react';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialButton from './SocialButton';

export default {
  component: SocialButton,
  title: 'Components/Social Button',
};

const Template = (args) => <SocialButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  textColor: 'text-white',
  buttonText: 'Sign in with Github!',
  buttonColor: 'bg-neutral-800',
  Icon: <FontAwesomeIcon icon={faGithub} alt="Github Icon" inverse />,
  onclick: () => console.log(),
};

export const Google = Template.bind({});
Google.args = {
  textColor: 'text-white',
  buttonText: 'Sign in with Google!',
  buttonColor: 'bg-blue-600',
  Icon: <FontAwesomeIcon icon={faGoogle} alt="Google Icon" inverse />,
  onclick: () => console.log(),
};

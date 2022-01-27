import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { SocialButton } from './SocialButton';

export default {
  component: SocialButton,
  title: 'Components/Social Button',
};

const Template = (args) => <SocialButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  socialPlatform: 'Sign into Github!',
  Icon: <FontAwesomeIcon icon={faGithub} alt="Github Icon" inverse />,
  onclick: () => console.log(),
  className: 'bg-neutral-800 rounded-md drop-shadow-lg w-fit',
};

export const Google = Template.bind({});
Google.args = {
  socialPlatform: 'Sign into Google!',
  Icon: <FontAwesomeIcon icon={faGoogle} alt="Google Icon" inverse />,
  onclick: () => console.log(),
  className: 'bg-blue-600 rounded-md drop-shadow-lg w-fit',
};

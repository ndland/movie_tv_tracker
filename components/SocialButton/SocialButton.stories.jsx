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
  socialPlatform: 'Github',
  icon: faGithub,
  altText: 'Github Icon',
  onclick: () => console.log(),
};

export const Google = Template.bind({});
Google.args = {
  socialPlatform: 'Login with Google!',
  icon: faGoogle,
  altText: 'Google Icon',
  onclick: () => console.log(),
};

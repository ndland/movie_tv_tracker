import React from 'react';

import { LoginForm } from './LoginForm';

export default {
  component: LoginForm,
  title: 'Components/Login Form',
};

const Template = (args) => <LoginForm {...args} />;

const Sized = (args) => (
  <div className="w-72">
    <LoginForm {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('clicked login'),
};

export const ConstrainedSize = Sized.bind({});
ConstrainedSize.args = {};

import React from 'react';
import Header from './Header';

export default {
  component: Header,
  title: 'Components/Header',
};

const Template = (args) => <Header {...args} />;

export const SignedIn = Template.bind({});
SignedIn.args = {
  session: {
    user: {
      email: 'test@test.com',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIo9zw5uLmmB_BUiCiNwbrb_mnR7HdYqq-nw&usqp=CAU',
    },
  },
};

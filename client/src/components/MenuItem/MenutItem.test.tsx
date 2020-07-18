import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '.';

const mockSection = {
  title: 'hats',
  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  id: 1,
  linkUrl: 'shop/hats',
};

test('Component Renders', () => {
  const component = shallow(<MenuItem section={mockSection} />);
});

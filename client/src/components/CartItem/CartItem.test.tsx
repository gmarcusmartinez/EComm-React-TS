import { shallow } from 'enzyme';
import React from 'react';
import CardItem from '.';

const mockItem = {
  id: 1,
  quantity: 1,
  name: 'Mock Item',
  price: 9.99,
  imageUrl: 'image.com',
};

describe('CartItem', () => {
  test(' component renders', () => {
    expect(shallow(<CardItem item={mockItem} />)).toMatchSnapshot();
  });
});

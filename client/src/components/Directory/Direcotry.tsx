import React from 'react';
import { sections } from './data';
import MenuItem from '../MenuItem/MenuItem';

const Direcotry = () => {
  const list = sections.map((section) => (
    <MenuItem key={section.id} section={section} />
  ));
  return <div className='directory-menu'>{list}</div>;
};

export default Direcotry;

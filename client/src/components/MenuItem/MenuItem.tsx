import React from 'react';

interface MenuItemProps {
  section: {
    title: string;
    imageUrl: string;
    size?: string;
  };
}

const MenuItem: React.FC<MenuItemProps> = ({
  section: { title, imageUrl, size },
}) => (
  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from 'components/MenuItem';
import { ISection } from 'interfaces';
import { selectDirectorySections } from 'store/selectors/directory';

interface DirecotryProps {
  sections: ISection[];
}

const Direcotry: React.FC<DirecotryProps> = ({ sections }) => {
  const list = sections.map((section) => (
    <MenuItem key={section.id} section={section} />
  ));
  return <div className='directory-menu'>{list}</div>;
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps, {})(Direcotry);

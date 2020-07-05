import React from 'react';

interface WithSpinnerProps {
  isLoading: boolean;
}

export default (WrappedComponent: any) => {
  const hocComponent: React.FC<WithSpinnerProps> = ({ isLoading, ...props }) =>
    isLoading ? (
      <div className='spinner-overlay'>
        <div className='spinner-container '></div>
      </div>
    ) : (
      <WrappedComponent {...props} />
    );

  return hocComponent;
};

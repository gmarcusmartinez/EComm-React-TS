import React from 'react';

interface CustomButtonProps {
  onClick?: any;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...props
}) => {
  return (
    <button
      className={`
      ${inverted ? 'inverted' : ''}
      ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...props}
      type='submit'
    >
      {children}
    </button>
  );
};

export default CustomButton;

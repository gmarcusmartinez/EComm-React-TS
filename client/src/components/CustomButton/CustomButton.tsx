import React from 'react';

interface CustomButtonProps {
  onClick?: any;
  isGoogleSignIn?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  ...props
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...props}
      type='submit'
    >
      {children}
    </button>
  );
};

export default CustomButton;

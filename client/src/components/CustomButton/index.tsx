import React from 'react';

interface CustomButtonProps {
  onClick?: any;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  type?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  type,
  ...props
}) => {
  return (
    <button
      className={`
      ${inverted ? 'inverted' : ''}
      ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...props}
      type={type ? 'button' : 'submit'}
    >
      {children}
    </button>
  );
};

export default CustomButton;

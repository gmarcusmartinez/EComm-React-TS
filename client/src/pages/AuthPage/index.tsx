import React from 'react';
import Signin from '../../components/Signin/Signin';
import Signup from '../../components/Signup/Signup';

const AuthPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <Signin />
      <Signup />
    </div>
  );
};

export default AuthPage;

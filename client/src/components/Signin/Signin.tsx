import React from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signinWithGoogle } from '../../firebase/firebase.utils';

const defaultFormState = { email: '', password: '' };

const Signin = () => {
  const [formData, setFormData] = React.useState(defaultFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData(defaultFormState);
  };

  const { email, password } = formData;
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Signin with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          handleChange={handleChange}
          value={email}
          name='email'
        />
        <FormInput
          label='Password'
          type='password'
          handleChange={handleChange}
          value={password}
          name='password'
        />
        <div className='buttons'>
          <CustomButton>Sign In</CustomButton>
          <CustomButton onClick={signinWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;

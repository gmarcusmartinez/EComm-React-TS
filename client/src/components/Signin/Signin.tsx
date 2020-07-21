import React from 'react';
import { connect } from 'react-redux';

import FormInput from 'components/FormInput';
import CustomButton from 'components/CustomButton';
import { googleSigninStart, emailSigninStart } from 'store/actions/user';

interface IProps {
  emailSigninStart: Function;
  googleSigninStart: Function;
}

const Signin: React.FC<IProps> = ({ emailSigninStart, googleSigninStart }) => {
  const defaultFormState = { email: '', password: '' };
  const [formData, setFormData] = React.useState(defaultFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    emailSigninStart(formData);
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
          <CustomButton
            type='button'
            onClick={googleSigninStart}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { emailSigninStart, googleSigninStart })(Signin);

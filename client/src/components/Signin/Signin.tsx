import React from 'react';
import { connect } from 'react-redux';

import FormInput from 'components/FormInput';
import CustomButton from 'components/CustomButton';
import { auth } from 'firebase/firebase.utils';
import { googleSigninStart } from 'store/actions/user';

const defaultFormState = { email: '', password: '' };
interface IProps {
  googleSigninStart: Function;
}

const Signin: React.FC<IProps> = ({ googleSigninStart }) => {
  const [formData, setFormData] = React.useState(defaultFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { email, password } = formData;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormData(defaultFormState);
    } catch (error) {
      console.log(error.message);
    }
  };

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

export default connect(null, { googleSigninStart })(Signin);

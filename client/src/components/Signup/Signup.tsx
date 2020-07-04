import React from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { defaultFormState, passwordMatchError, fields } from './helpers';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const Signup = () => {
  const [formData, setFormData] = React.useState(defaultFormState);
  const { displayName, email, password, confirmPassword } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    passwordMatchError(password, confirmPassword);

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setFormData(defaultFormState);
    } catch (error) {
      console.log(error.message);
    }
  };
  const formInputs = fields.map((f) => (
    <FormInput
      key={f.name}
      type={f.type}
      name={f.name}
      value={f.value}
      handleChange={handleChange}
      label={f.label}
    />
  ));
  return (
    <div className='sign-up'>
      <h2>I do not have an account</h2>
      <span>Signup with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        {formInputs}
        <CustomButton>Signup</CustomButton>
      </form>
    </div>
  );
};

export default Signup;

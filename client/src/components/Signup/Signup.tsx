import React from 'react';
import { connect } from 'react-redux';
import FormInput from 'components/FormInput';
import CustomButton from 'components/CustomButton';
import { defaultFormState, passwordMatchError, fields } from './helpers';
import { signupStart } from 'store/actions/user';

interface IProps {
  signupStart: Function;
}
const Signup: React.FC<IProps> = ({ signupStart }) => {
  const [formData, setFormData] = React.useState(defaultFormState);
  const { password, confirmPassword } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    passwordMatchError(password, confirmPassword);
    signupStart(formData);
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

export default connect(null, { signupStart })(Signup);

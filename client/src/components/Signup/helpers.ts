export const defaultFormState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const passwordMatchError = (pw: string, confirm: string) => {
  if (pw !== confirm) {
    alert('Passwords must match');
    return;
  }
};

export const fields = [
  {
    type: 'text',
    name: 'displayName',
    value: defaultFormState.displayName,
    label: 'Display Name',
  },
  {
    type: 'email',
    name: 'email',
    value: defaultFormState.email,
    label: 'Email',
  },
  {
    type: 'password',
    name: 'password',
    value: defaultFormState.password,
    label: 'Password',
  },
  {
    type: 'password',
    name: 'confirmPassword',
    value: defaultFormState.confirmPassword,
    label: 'Confirm Password',
  },
];

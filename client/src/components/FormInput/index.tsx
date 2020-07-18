import React, { ChangeEvent } from 'react';

interface FormInputProps {
  label: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  handleChange,
  value,
  name,
  type,
}) => {
  return (
    <div className='group'>
      <input
        type={type}
        className='form-input'
        onChange={handleChange}
        required
        name={name}
      />
      {label ? (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;

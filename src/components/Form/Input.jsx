import React from 'react';
import { useController } from 'react-hook-form';

const Input = ({ label, name, control, required, placeholder, hideLabel, type = 'text' }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue: '',
  });

  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className={`block font-medium mb-1 ${hideLabel && 'text-white'}`}>
        {label}{required && <span className='text-error' > * </span>}
      </label>
      <input
        {...inputProps}
        ref={ref}
        id={name}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 rounded border ${invalid ? 'border-error' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
      />
      {invalid && (
        <p className="text-error text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default Input;

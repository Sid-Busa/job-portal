import React from 'react';
import { useController } from 'react-hook-form';

const RadioGroup = ({ label, name, control, options, rules, errors, required }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  });

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label} {required && <span className='text-error' > * </span>} </label>
      <div className="flex gap-4">
        {options.map((option) => (
          <div key={option.value} className="flex items-center mb-2 text-[#9fa8b3]">
            <input
              {...inputProps}
              ref={ref}
              id={`${name}_${option.value}`}
              value={option.value}
              checked={inputProps.value === option.value}
              type="radio"
              className={`mr-2 ${invalid ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            />
            <label htmlFor={`${name}_${option.value}`}>{option.label}</label>
          </div>
        ))}
      </div>
      {invalid && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default RadioGroup;

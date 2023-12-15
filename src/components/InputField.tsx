import React from 'react'

interface InputFieldProps {
  type: string;
  placeholder: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({label, type, placeholder, onChange}) => {
  return (
    <div className='mt-5'>
      <label htmlFor="password" className="font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        className="block flex-1 pl-1 py-1.5 rounded-md ring-1 ring-gray-300"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  )
}

export default InputField

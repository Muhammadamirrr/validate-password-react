import React, { useState } from 'react'
import { validatePassword } from '../utils/password_utility';
import InputField from './InputField';
import Errors from './Errors';

const Form = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validatePassword(password, passwordConfirm);
    if (validationErrors.length === 0) {
      setErrors([]);
      setSuccessMessage('Success');
    } else {
      setErrors(validationErrors);
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex justify-center items-center h-screen">
        <div className='border border-gray-300 rounded p-40'>
          <Errors errors={errors}/>
          <div className="success-message text-green-700">
            {successMessage}
          </div>
          <InputField
            label='Password'
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <InputField
            label='Confirm Password'
            type="password"
            placeholder="Confirm Password"
            onChange={(e)=>setPasswordConfirm(e.target.value)}
          />
          <button type="submit" className="mt-10 text-white bg-purple-700 rounded-lg px-5 py-2.5">Submit</button>
        </div>
      </div>
    </form>
  )
}

export default Form;

import React from 'react'

interface ErrorMessageProps {
  errors: string[];
}

const Errors: React.FC<ErrorMessageProps> = ({errors}) => {
  return (
    <div>
      <div className="errors" data-testid="errors-container">
        <ul className="text-red-500">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Errors

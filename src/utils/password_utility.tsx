type ValidationRule = {
  condition: (value: string) => boolean;
  message: string;
};

const validationRules: ValidationRule[] = [
  { condition: (value) => value.length >= 6, message: 'Password should be at least 6 characters' },
  { condition: (value) => /[A-Z]/.test(value), message: 'Password should contain at least 1 uppercase letter' },
  { condition: (value) => /[a-z]/.test(value), message: 'Password should contain at least 1 lowercase letter' },
  { condition: (value) => /\d/.test(value), message: 'Password should contain at least 1 number' },
  { condition: (value) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value), message: 'Password should contain at least 1 special character' },
];

const validatePassword = (password: string, passwordConfirm: string): string[] => {
  const validationErrors: string[] = [];

  if (password !== passwordConfirm) {
    validationErrors.push('Password and confirm password do not match');
  }

  validationRules.forEach((rule) => {
    if (!rule.condition(password)) {
      validationErrors.push(rule.message);
    }
  });

  return validationErrors;
};

export { validatePassword }

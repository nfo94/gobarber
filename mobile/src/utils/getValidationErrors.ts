import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationerrors(error: ValidationError): Errors {
  const validationErrors: Errors = {};

  error.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

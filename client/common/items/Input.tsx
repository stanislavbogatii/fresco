import { HTMLInputTypeAttribute } from 'react';
import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

type InputProps<T extends FieldValues> = {
  labelText: string;
  field: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  type?: HTMLInputTypeAttribute;
  registerOptions?: RegisterOptions;
  className?: string;
  defaultValue?: number | string | string[];
  disabled?: boolean;
  placeholder?: string;
};

export const Input = <T extends FieldValues>({
  labelText,
  field,
  register,
  registerOptions = {},
  error,
  defaultValue,
  className,
  type = 'text',
  disabled = false,
  placeholder,
}: InputProps<T>) => (
  <div className="mb-3">
    <label className="register-form__text" htmlFor={field}>
      {labelText} {registerOptions?.required && <span className="text-danger">*</span>}
    </label>
    <input
      type={type}
      id={field}
      className={`form-control ${className} ${error ? 'border-danger' : ''}`}
      {...register(field, registerOptions)}
      defaultValue={defaultValue}
      disabled={disabled}
      placeholder={placeholder}
    />
    <p className="error-field mt-1 text-danger">{error}</p>
  </div>
);

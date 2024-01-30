import { forwardRef } from 'react';
import { Input } from 'antd';
import './style.scss';
import { ErrorType } from '@/types/models/error.ts';

type PasswordInputProps = {
  placeHolder: string;
  error?: ErrorType;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const { placeHolder, error } = props;
    return (
      <div className={'password-input-atoms'}>
        <Input.Password ref={ref} placeholder={placeHolder} />
        {error && <p className={'error'}>{error.message}</p>}
      </div>
    );
  },
);

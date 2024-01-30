import { Input } from 'antd';
import './style.scss';
import { ErrorType } from '@/types/models/error.ts';
import React, { forwardRef } from 'react';

type TextInputProps = {
  name: string;
  placeHolder: string;
  error?: ErrorType;
};


export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    return (
      <div className={'text-input-atoms'}>
        <Input ref={ref} placeholder={props.placeHolder} />
        {props.error && <p className={'error'}>{props.error.message}</p>}
      </div>
    );
  },
);

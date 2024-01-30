import React, {forwardRef} from 'react';
import {DatePicker} from 'antd';
import './style.scss';
import {ErrorType} from '@/types/models/error.ts';

type DateInputProps = {
    name: string;
    placeHolder: string;
    error?: ErrorType;
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>((props, ref) => {
  return (
      <div className={'date-input-atoms'}>
          <DatePicker
              format={"YYYY/MM/DD HH:mm"}
              ref={ref}
              placeholder={props.placeHolder}
          />
          {props.error && <p className={'error'}>{props.error.message}</p>}
      </div>
  );
});

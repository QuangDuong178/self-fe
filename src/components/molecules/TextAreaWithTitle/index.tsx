import React, { forwardRef, Ref } from 'react';
import '@/components/molecules/InputWithTitle/style.scss';
import { ErrorType } from '@/types/models/error.ts';
import { CommonTextArea } from '@/components/atoms/CommonTextArea';

type TextInputProps = {
    className?: string;
    title: string;
    name: string;
    placeHolder: string;
    error?: ErrorType;
};

export const TextAreaWithTitle = forwardRef(
    (props: TextInputProps, ref: Ref<HTMLInputElement>) => {
        const { className, title, name, placeHolder, error } = props;

        return (
            <div className={'text-input-with-title ' + className}>
                <h3 className={'mb-2'}>{title}</h3>
                <CommonTextArea
                    name={name}
                    placeHolder={placeHolder}
                    inputRef={ref}
                    error={error}
                />
            </div>
        );
    }
);

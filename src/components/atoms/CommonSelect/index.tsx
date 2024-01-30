import { forwardRef } from 'react';
import { Select } from 'antd';
import './style.scss';

export type OptionSelect = {
  value: string | number,
  label: string,
}
type SelectProps = {
  name: string;
  options: Array<OptionSelect>,
};
export const CommonSelect = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  return <Select
    className={'input-atoms'}
    ref={ref}
    defaultValue={props.options[0].value}
    options={props.options}
  />;
});

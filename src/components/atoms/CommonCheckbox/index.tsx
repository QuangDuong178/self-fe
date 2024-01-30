import { Checkbox } from 'antd';
import './style.scss';

type CheckBoxProps = {
    label: string,
    value: boolean,
    className?: string,
    handleClick: () => void
};
export const CommonCheckbox = (props: CheckBoxProps) => {
    return <Checkbox className={props.className + ' checkbox-atoms'} checked={props.value} onChange={props.handleClick}>
        {props.label}
    </Checkbox>;
};
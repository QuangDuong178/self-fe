import '@/components/atoms/CommonButton/style.scss';
import { Button } from 'antd';

type ButtonProps = {
  content: string,
  handleClick: () => void
  className?: string
  isOutline?: boolean
}

export const CommonButton = (props: ButtonProps) => {
  return <Button ghost={props.isOutline} onClick={props.handleClick} className={'button-atoms ' + props.className}>
    {props.content}
  </Button>;

};
import { Title } from '@/components/atoms/Title';
import { CommonSearch } from '@/components/atoms/CommonSearch';
import { Button } from 'antd';
import './style.scss';
import { forwardRef } from 'react';

type SearchBoxProps = {
  title: string;
  name: string;
  placeHolder: string;
}

export const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>((props, ref) => {

  return (
    <div className={'search-box-molecules'}>
      <Title text={props.title} />
      <div className={'flex place-items-center mt-2'}>
        <CommonSearch name={props.name} placeHolder={props.placeHolder} ref={ref} />
        <Button className={'ml-2'} type='primary' ghost>
          検索
        </Button>
      </div>
    </div>
  );

});


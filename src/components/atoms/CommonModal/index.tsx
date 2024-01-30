import { Modal } from 'antd';
import { ReactNode } from 'react';
import './style.scss';


export type ModalProps = {
  footer: Array<ReactNode>,
  title: string,
  isOpen: boolean,
  handleOk: () => void,
  handleCancel: () => void,
  children: ReactNode,

}
export const CommonModal = (props: ModalProps) => {
  const { title, isOpen, handleCancel, handleOk, children, footer } = props;

  return <Modal
    footer={footer}
    width={'fit-content'}
    maskClosable={false}
    open={isOpen}
    onCancel={handleCancel}
    onOk={handleOk}
    centered
    title={title}
    className={'modal-atoms'}>
    {children}

  </Modal>;
};
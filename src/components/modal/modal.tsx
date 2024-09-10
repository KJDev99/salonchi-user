import { Modal as CustomModal } from '@mantine/core';
import { ReactNode } from 'react';

interface IModalProps {
  children: ReactNode;
  title?: string;
  opened: boolean;
  close: () => void;
  handleSubmit?: (e: any) => void;
}

export const Modal = ({
  children,
  close,
  handleSubmit,
  ...props
}: IModalProps) => {
  return (
    <>
      <CustomModal onClose={close} centered {...props}>
        <form onSubmit={handleSubmit}>{children}</form>
      </CustomModal>
    </>
  );
};

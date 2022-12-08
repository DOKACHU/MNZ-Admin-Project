import { useEffect, useState } from 'react';

interface ModalProps {
  createInfo: any;
  setCreateInfo: any;
}

export function useModal({ setCreateInfo, createInfo }: ModalProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    // setCreateInfo(createInfo);
    setOpen(false);
  };

  useEffect(() => {
    setCreateInfo(createInfo);
  }, []);

  return {
    open,
    handleOpen,
    handleModalClose,
  };
}

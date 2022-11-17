import { useState } from 'react';

export function useModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleOpen,
    handleModalClose,
  };
}

import { useEffect, useState } from 'react';

export function useModal() {
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return {
    deleteOpen,
    open,
    handleOpen,
    handleDeleteOpen,
    handleDeleteClose,
    handleClose,
    handleToggle,
  };
}

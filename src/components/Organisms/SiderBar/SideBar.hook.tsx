import { useState } from 'react';

export default function useSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    handleToggleButtonClick,
  };
}

import { useState } from 'react';

export default function useSideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    handleToggleButtonClick,
  };
}

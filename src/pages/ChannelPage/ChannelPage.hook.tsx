// hooks
import { useState } from 'react';

export default function useChannelPage() {
  const [currentTapValue, setcurrentTapValue] = useState(1);
  const [personalTap, setPersonalTap] = useState([
    { name: 'Player', value: 0, isFocused: false },
    { name: 'List', value: 1, isFocused: true },
  ]);

  const handleTapChange = (tap: number) => {
    setcurrentTapValue(tap);
    setPersonalTap(
      personalTap.map((item) => {
        if (item.value === tap) {
          return { ...item, isFocused: true };
        }
        return { ...item, isFocused: false };
      }),
    );
  };

  return {
    personalTap,
    currentTapValue,
    handleTapChange,
  };
}

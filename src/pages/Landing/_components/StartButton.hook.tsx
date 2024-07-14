import { useNavigate } from 'react-router-dom';

export default function useStartButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signin');
  };
  return { handleClick };
}

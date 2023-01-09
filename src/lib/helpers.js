import { useNavigate } from 'react-router-dom';
import { useAuthenticated } from '../hooks/useAuthenticated';

export const redirectToLogin = () => {
  const [isLoggedIn] = useAuthenticated();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/welcome');
  }
};

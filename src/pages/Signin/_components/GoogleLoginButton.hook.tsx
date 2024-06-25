import { CredentialResponse } from '@react-oauth/google';
import { useUserStore } from '../../../../store/useUserStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function useGoogleLoginButton() {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  const handleLogin = async (response: CredentialResponse) => {
    try {
      const { credential } = response;

      if (credential) {
        const { data } = await axios.post('http://localhost:8080/api/auth/google', {
          credential,
        });

        setUser({
          id: data.id,
          email: data.email,
          name: data.nickName,
          picture: data.profileImage,
        });

        console.log('로그인 성공', data);
      }
    } catch (error) {
      console.error('로그인 중 에러 발생', error);
    }
  };

  useEffect(() => {
    console.log('user', user);
    if (user) {
      navigate('/main');
    }
  }, [user, navigate]);

  const handleError = () => {
    console.log('로그인 실패');
  };

  return { clientId, handleLogin, handleError };
}

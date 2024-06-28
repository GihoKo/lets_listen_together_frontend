import styled from 'styled-components';
import SideBar from '../../components/Organisms/SiderBar/SideBar';
import Header from '../../components/Molcules/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import useRenewTokens from '../../../apis/hooks/useRenewTokens';
import { useEffect } from 'react';
import { useApplicationAuthTokenStore } from '../../store/useAuthStore';

export default function MainPage() {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useApplicationAuthTokenStore();
  const { data, isLoading, isSuccess, isError } = useRenewTokens();

  useEffect(() => {
    if (isSuccess) {
      setAccessToken(data.accessToken);
    }
  }, [data]);

  if (isLoading) {
    return <div>엑세스 토큰을 발급 중 입니다...</div>;
  }

  if (isError) {
    // 리프레시 토큰 만료시 로그인 페이지로 이동
    navigate('/signIn');
  }

  return (
    <Wrapper>
      <SideBar />
      <Right>
        <Header />
        <button
          onClick={() => {
            console.log('토큰', accessToken);
          }}
        >
          tokem
        </button>
        <Content>
          <Outlet />
        </Content>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;

  display: flex;

  position: relative;
`;

const Right = styled.div`
  height: 100%;
  flex-grow: 1;

  overflow-y: hidden;

  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

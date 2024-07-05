import styled from 'styled-components';
import SideBar from '../../components/Organisms/SiderBar/SideBar';
import Header from '../../components/Molcules/Header/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import useRenewTokens from '../../../apis/hooks/useRenewTokens';
import { useEffect } from 'react';
import { useApplicationAuthTokenStore } from '../../store/useAuthStore';

export default function MainPage() {
  const navigate = useNavigate();
  const { setAccessToken } = useApplicationAuthTokenStore();
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
    navigate('/signIn');
  }

  return (
    <Wrapper>
      <Header />
      <Main>
        <SideBar />
        <Right>
          <Content>
            <Outlet />
          </Content>
        </Right>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  background-color: var(--grey-grey100);

  position: relative;
`;

const Main = styled.div`
  flex-grow: 1;
  display: flex;
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

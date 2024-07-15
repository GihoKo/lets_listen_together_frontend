// libraries
import styled from 'styled-components';

// hooks
import useMainPage from './MainPage.hook';

// components
import Header from './_compoenets/Header/Header';
import SideBar from './_compoenets/SiderBar/SideBar';
import { Outlet } from 'react-router-dom';

export default function MainPage() {
  //logics
  const { isLoading, isError, navigate } = useMainPage();

  // view
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
          <Outlet />
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

const Main = styled.main`
  display: flex;
  overflow-y: hidden;
`;

const Right = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// libraries
import styled from 'styled-components';

// components
import Header from './_compoenets/Header/Header';
import SideBar from './_compoenets/SiderBar/SideBar';
import { Outlet } from 'react-router-dom';
import MusicBar from './_compoenets/MusicBar/MusicBar';

export default function MainPage() {
  // view
  return (
    <Wrapper>
      <Header />
      <Main>
        <SideBar />
        <Right>
          <Outlet />
        </Right>
      </Main>
      <MusicBar />
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
  height: calc(100vh - 72px);

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 56px);
  }
`;

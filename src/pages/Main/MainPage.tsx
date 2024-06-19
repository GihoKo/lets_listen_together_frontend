import styled from 'styled-components';
import SideBar from '../../components/Organisms/SiderBar/SideBar';
import Header from '../../components/Molcules/Header/Header';
import { Outlet } from 'react-router-dom';

export default function MainPage() {
  return (
    <Wrapper>
      <SideBar />
      <Right>
        <Header />
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

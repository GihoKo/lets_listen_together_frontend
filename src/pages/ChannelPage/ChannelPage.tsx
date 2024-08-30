// libraries
import styled from 'styled-components';

// components
import MusicPlayer from './_components/MusicPlayer/MusicPlayer';
import MusicList from './_components/MusicList/MusicList';

// hooks
import useChannelPage from './ChannelPage.hook';

// images
import FloatingActionButton from './_components/FloatingActionButton/FloatingActionButton';
import ActionMenuContainer from './_components/FloatingActionButton/ActionMenuContainer';

export default function ChannelPage() {
  // logics
  const { isFocusedFloatingButton, zIndex, handleFloatingButtonClick, handleDimmedClick, handleUpdateLayer } =
    useChannelPage();

  return (
    <>
      <Content>
        <MusicPlayer zIndex={zIndex} />
        <MusicList zIndex={zIndex} />
      </Content>
      <FloatingActionButton handleFloatingButtonClick={handleFloatingButtonClick} />
      {isFocusedFloatingButton && ActionMenuContainer({ handleDimmedClick, handleUpdateLayer })}
    </>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 24px;

  justify-items: center;

  @media (max-width: 768px) {
    width: 200vw;

    gap: 0px;
    padding: 0px;
  }
`;

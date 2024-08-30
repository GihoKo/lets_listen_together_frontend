// libraries
import styled from 'styled-components';

// components
import MusicPlayer from './_components/MusicPlayer/MusicPlayer';
import MusicList from './_components/MusicList/MusicList';

// hooks
import useChannelPage from './ChannelPage.hook';

// images
import upChevronSvg from '@/images/svg/up-chevron.svg';
import musicSvg from '@/images/svg/music.svg';
import playlistSvg from '@/images/svg/playlist.svg';

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
      <FloatingActionButton onClick={handleFloatingButtonClick}>
        <img src={upChevronSvg} alt='플로팅 버튼 이미지' />
      </FloatingActionButton>
      {isFocusedFloatingButton && (
        <FloatingActionButtonDimmed onClick={handleDimmedClick}>
          <FloatingActionButtonContainer>
            <FloatingActionButtonPlayerButton
              onClick={() => {
                handleUpdateLayer({
                  layer: 'player',
                });
              }}
            >
              <img src={musicSvg} alt='음악 버튼 이미지' />
            </FloatingActionButtonPlayerButton>
            <FloatingActionButtonPlayListButton
              onClick={() => {
                handleUpdateLayer({
                  layer: 'musicList',
                });
              }}
            >
              <img src={playlistSvg} alt='플레이리스트 버튼 이미지' />
            </FloatingActionButtonPlayListButton>
          </FloatingActionButtonContainer>
        </FloatingActionButtonDimmed>
      )}
    </>
  );
}

const FloatingActionButtonBluePrint = styled.button`
  flex-shrink: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--mint4);
  box-shadow: 0 0 8px var(--mint4);

  cursor: pointer;

  z-index: 9999;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const FloatingActionButtonDimmed = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9990;
`;

const FloatingActionButtonContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
  position: fixed;
  bottom: 80px;
  right: 24px;
`;

const FloatingActionButton = styled(FloatingActionButtonBluePrint)`
  position: fixed;
  bottom: 24px;
  right: 24px;
`;

const FloatingActionButtonPlayerButton = styled(FloatingActionButtonBluePrint)`
  position: relative;
  bottom: 0px;
  right: 0px;
`;

const FloatingActionButtonPlayListButton = styled(FloatingActionButtonBluePrint)`
  position: relative;
  bottom: 0px;
  right: 0px;
`;

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

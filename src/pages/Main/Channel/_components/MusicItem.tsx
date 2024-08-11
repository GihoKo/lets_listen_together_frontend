// libraries
import styled from 'styled-components';

// hooks
import useMusicItem from './MusicItem.hook';

// utils
import { prefixZeroForNumber } from '../../../../utils/prefixZeroForNumber';

// images
import mediaPlayFocusedSvg from '../../../../images/svg/media-play-focused.svg';
import editSvg from '../../../../images/svg/edit.svg';
import editFocusedSvg from '../../../../images/svg/edit-focused.svg';
import deleteSvg from '../../../../images/svg/delete.svg';
import deleteFocusedSvg from '../../../../images/svg/delete-focused.svg';
import mockImage from '@/images/dummyImage.png';
import upChevron from '@/images/svg/up-chevron.svg';
import upChveronFocused from '@/images/svg/up-chevron-focused.svg';
import downChevron from '@/images/svg/down-chevron.svg';
import downChevronFocused from '@/images/svg/down-chevron-focused.svg';
import mediaPlayGregSvg from '../../../../images/svg/media-play-grey.svg';

// types
import { MusicItemProps } from './MusicItem.type';

export default function MusicItem({ music, index, isEditMode }: MusicItemProps) {
  // logics
  const {
    isCurrentMusic,
    videoData,
    handlePlayButtonClick,
    handleEditMusicButtonClick,
    handleDeleteButtonClick,
    handleOrderUpButton,
    handleOrderDownButton,
  } = useMusicItem({
    music,
  });

  // view
  return (
    <>
      {isEditMode ? (
        // isEditMode === true
        <Wrapper $isCurrentMusic={isCurrentMusic}>
          <OrderBox>
            <OrderButton type='button' onClick={handleOrderUpButton}>
              <img src={isCurrentMusic ? upChveronFocused : upChevron} alt='위로 버튼' />
            </OrderButton>
            <OrderButton type='button' onClick={handleOrderDownButton}>
              <img src={isCurrentMusic ? downChevronFocused : downChevron} alt='아래로 버튼' />
            </OrderButton>
          </OrderBox>
          <ImageBox>
            <img src={videoData?.items[0].snippet.thumbnails.maxres?.url || mockImage} alt='음악 이미지' />
          </ImageBox>
          <Middle>
            <Title $isCurrentMusic={isCurrentMusic}>{music.title}</Title>
            <Artist $isCurrentMusic={isCurrentMusic}>{music.artist}</Artist>
          </Middle>
          <Right>
            <EditButton type='button' onClick={handleEditMusicButtonClick}>
              <img src={isCurrentMusic ? editFocusedSvg : editSvg} alt='음악 수정 버튼 이미지' />
            </EditButton>
            <DeleteButton type='button' onClick={handleDeleteButtonClick}>
              <img src={isCurrentMusic ? deleteFocusedSvg : deleteSvg} alt='음악 삭제 버튼 이미지' />
            </DeleteButton>
          </Right>
        </Wrapper>
      ) : (
        // isEditMode === false
        <Wrapper $isCurrentMusic={isCurrentMusic}>
          <Number $isCurrentMusic={isCurrentMusic}>{prefixZeroForNumber(index + 1)}</Number>
          <ImageBox>
            <img src={videoData?.items[0].snippet.thumbnails.maxres?.url || mockImage} alt='음악 이미지' />
          </ImageBox>
          <Middle>
            <Title $isCurrentMusic={isCurrentMusic}>{music.title}</Title>
            <Artist $isCurrentMusic={isCurrentMusic}>{music.artist}</Artist>
          </Middle>
          <Right>
            <PlayButton type='button' onClick={handlePlayButtonClick}>
              <img src={isCurrentMusic ? mediaPlayFocusedSvg : mediaPlayGregSvg} alt='음악 재생 버튼 이미지' />
            </PlayButton>
          </Right>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div<{ $isCurrentMusic: boolean }>`
  border-radius: 12px;
  border: ${({ $isCurrentMusic }) => ($isCurrentMusic ? '2px solid var(--mint5)' : '1px solid var(--grey-grey300)')};
  min-width: 300px;
  width: 100%;
  height: 72px;

  display: flex;
  align-items: center;
  gap: 16px;

  background: ${({ $isCurrentMusic }) =>
    $isCurrentMusic
      ? 'linear-gradient(120deg, rgba(92,126,102,1) 0%, rgba(138,189,153,1) 100%)'
      : 'var(--grey-grey200)'};
  padding: 8px 20px;

  @media (max-width: 768px) {
    border-radius: 0;

    gap: 8px;
    padding: 8px 16px;
  }
`;

const Number = styled.div<{
  $isCurrentMusic: boolean;
}>`
  display: flex;
  align-items: center;

  color: ${({ $isCurrentMusic }) => ($isCurrentMusic ? 'var(--mint3)' : 'var(--grey-grey600)')};
  font-size: 18px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const OrderBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const OrderButton = styled.button`
  width: 36px;
  height: 36px;

  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  img {
    width: 100%;
    height: 100%;

    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const ImageBox = styled.div`
  border-radius: 50%;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 48px;
  height: 48px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const Middle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const Title = styled.div<{
  $isCurrentMusic: boolean;
}>`
  color: ${({ $isCurrentMusic }) => ($isCurrentMusic ? 'var(--mint3)' : 'var(--grey-grey900)')};
  font-weight: 700;
  font-size: 16px;

  @media (max-width: 768px) {
    max-width: 152px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
  }
`;

const Artist = styled.div<{
  $isCurrentMusic: boolean;
}>`
  color: ${({ $isCurrentMusic }) => ($isCurrentMusic ? 'var(--mint6)' : 'var(--grey-grey600)')};
  font-size: 14px;

  @media (max-width: 768px) {
    max-width: 152px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 0px;
  }
`;

const Button = styled.button`
  width: 36px;
  height: 36px;

  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  img {
    width: 100%;
    height: 100%;

    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const PlayButton = styled(Button)``;

const EditButton = styled(Button)``;

const DeleteButton = styled(Button)``;

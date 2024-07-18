import styled from 'styled-components';
import { MusicItemProps } from '../_types/interface';
import { useEffect, useState } from 'react';
import axios from 'axios';
import extractYouTubeVideoId from '../../../../utils/extractYouTubeVideoId';
import mediaPlaySvg from '../../../../images/svg/media-play.svg';
import mediaPlayFocusedSvg from '../../../../images/svg/media-play-focused.svg';
import editSvg from '../../../../images/svg/edit.svg';
import editFocusedSvg from '../../../../images/svg/edit-focused.svg';
import deleteSvg from '../../../../images/svg/delete.svg';
import deleteFocusedSvg from '../../../../images/svg/delete-focused.svg';
import useMusicStore from '../../../../store/useMusicStore';
import { prefixZeroForNumber } from '../../../../utils/prefixZeroForNumber';
import useModalStore from '../../../../store/useModalStore';
import EditMusicModal from '../../../../components/Organisms/Modal/EditMusicModal';
import DeleteMusicModal from '../../../../components/Organisms/Modal/DeleteMusicModal';
import { ModalType } from '../../../../types/enum';
import mockImage from '@/images/dummyImage.png';
import upChevron from '@/images/svg/up-chevron.svg';
import upChveronFocused from '@/images/svg/up-chevron-focused.svg';
import downChevron from '@/images/svg/down-chevron.svg';
import downChevronFocused from '@/images/svg/down-chevron-focused.svg';

export default function MusicItem({ music, index, currentMusic, setMusicList, isEditMode }: MusicItemProps) {
  const { openModal } = useModalStore();
  const { setMusic } = useMusicStore();
  const [musicImageUrl, setMusicImageUrl] = useState<string>();
  const isCurrentMusic = currentMusic?.id === music.id;

  const handlePlayButtonClick = () => {
    setMusic(music);
  };

  const handleEditMusicButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    openModal(ModalType.EDIT_MUSIC, <EditMusicModal />, { music });
  };

  const handleDeleteButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    openModal(ModalType.DELETE_MUSIC, <DeleteMusicModal />, { music });
  };

  const handleOrderUpButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setMusicList((prev) => {
      const newMusicList = [...prev];
      const currentIndex = newMusicList.findIndex((m) => m.id === music.id);
      if (currentIndex === 0) return newMusicList;

      // 객체 순서 바꾸기
      [newMusicList[currentIndex], newMusicList[currentIndex - 1]] = [
        newMusicList[currentIndex - 1],
        newMusicList[currentIndex],
      ];

      // 실제 order값 바꾸기
      [newMusicList[currentIndex].order, newMusicList[currentIndex - 1].order] = [
        newMusicList[currentIndex - 1].order,
        newMusicList[currentIndex].order,
      ];

      return newMusicList;
    });
  };

  const handleOrderDownButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setMusicList((prev) => {
      const newMusicList = [...prev];
      const currentIndex = newMusicList.findIndex((m) => m.id === music.id);
      if (currentIndex === newMusicList.length - 1) return newMusicList;

      // 객체 순서 바꾸기
      [newMusicList[currentIndex], newMusicList[currentIndex + 1]] = [
        newMusicList[currentIndex + 1],
        newMusicList[currentIndex],
      ];

      // 실제 order값 바꾸기
      [newMusicList[currentIndex].order, newMusicList[currentIndex + 1].order] = [
        newMusicList[currentIndex + 1].order,
        newMusicList[currentIndex].order,
      ];

      return newMusicList;
    });
  };

  useEffect(() => {
    if (!music?.url) return;

    const getMusicImageUrl = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            id: extractYouTubeVideoId(music?.url),
            key: process.env.GOOGLE_API_KEY,
          },
        });
        setMusicImageUrl(response.data.items[0].snippet.thumbnails.default.url);
      } catch (e) {
        console.error(e);
      }
    };

    getMusicImageUrl();
  }, [music?.url]);

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
            <img src={musicImageUrl ? musicImageUrl : mockImage} alt='음악 이미지' />
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
            <img src={musicImageUrl ? musicImageUrl : mockImage} alt='음악 이미지' />
          </ImageBox>
          <Middle>
            <Title $isCurrentMusic={isCurrentMusic}>{music.title}</Title>
            <Artist $isCurrentMusic={isCurrentMusic}>{music.artist}</Artist>
          </Middle>
          <Right>
            <PlayButton type='button' onClick={handlePlayButtonClick}>
              <img src={isCurrentMusic ? mediaPlayFocusedSvg : mediaPlaySvg} alt='음악 재생 버튼 이미지' />
            </PlayButton>
          </Right>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div<{ $isCurrentMusic: boolean }>`
  border-radius: 12px;
  border: ${({ $isCurrentMusic }) => ($isCurrentMusic ? '2px solid var(--mint5)' : '2px solid var(--grey-grey150)')};
  min-width: 300px;
  width: 100%;
  height: 72px;

  display: flex;
  align-items: center;
  gap: 16px;

  background-color: ${({ $isCurrentMusic }) => ($isCurrentMusic ? 'var(--mint8)' : 'var(--grey-grey200)')};
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
  border-radius: 12px;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 60px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
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

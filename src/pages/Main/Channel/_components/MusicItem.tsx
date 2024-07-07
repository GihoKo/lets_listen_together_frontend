import styled from 'styled-components';
import { MusicItemProps } from '../_types/interface';
import { useEffect, useState } from 'react';
import axios from 'axios';
import extractYouTubeVideoId from '../../../../utils/extractYouTubeVideoId';
import mediaPlaySvg from '../../../../images/svg/media-play.svg';
import editSvg from '../../../../images/svg/edit.svg';
import deleteSvg from '../../../../images/svg/delete.svg';
import useMusicStore from '../../../../store/useMusicStore';
import { prefixZeroForNumber } from '../../../../utils/prefixZeroForNumber';
import useModalStore from '../../../../store/useModalStore';
import EditMusicModal from '../../../../components/Organisms/Modal/EditMusicModal';
import DeleteMusicModal from '../../../../components/Organisms/Modal/DeleteMusicModal';
import { ModalType } from '../../../../types/enum';

export default function MusicItem({ music, index }: MusicItemProps) {
  const { openModal } = useModalStore();
  const { setMusic } = useMusicStore();
  const [musicImageUrl, setMusicImageUrl] = useState<string>();

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
    <Wrapper>
      <Number>{prefixZeroForNumber(index + 1)}</Number>
      <ImageBox>
        <img src={musicImageUrl} alt='음악 이미지' />
      </ImageBox>
      <Middle>
        <Title>{music.title}</Title>
        <Artist>{music.artist}</Artist>
      </Middle>
      <Right>
        <PlayButton type='button' onClick={handlePlayButtonClick}>
          <img src={mediaPlaySvg} alt='음악 재생 버튼 이미지' />
        </PlayButton>
        <EditButton type='button' onClick={handleEditMusicButtonClick}>
          <img src={editSvg} alt='음악 수정 버튼 이미지' />
        </EditButton>
        <DeleteButton type='button' onClick={handleDeleteButtonClick}>
          <img src={deleteSvg} alt='음악 삭제 버튼 이미지' />
        </DeleteButton>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 12px;
  min-width: 300px;
  width: 100%;

  display: flex;
  gap: 16px;

  background-color: var(--grey-grey200);
  padding: 8px 20px;
`;

const Number = styled.div`
  display: flex;
  align-items: center;

  color: var(--grey-grey600);
  font-size: 18px;
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
  }
`;

const Middle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const Title = styled.div`
  color: var(--grey-grey900);
  font-weight: 700;
  font-size: 16px;
`;

const Artist = styled.div`
  color: var(--grey-grey600);
  font-size: 14px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
`;

const PlayButton = styled(Button)``;

const EditButton = styled(Button)``;

const DeleteButton = styled(Button)``;

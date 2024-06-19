import styled from 'styled-components';
import { MusicItemProps } from '../_types/interface';
import { useEffect, useState } from 'react';
import axios from 'axios';
import extractYouTubeVideoId from '../../../../utils/extractYouTubeVideoId';

export default function MusicItem({ music, selectMusic }: MusicItemProps) {
  const [musicImageUrl, setMusicImageUrl] = useState<string>();

  const handleClick = () => {
    selectMusic(music);
  };

  useEffect(() => {
    if (!music?.url) return;

    const getMusicImageUrl = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            id: extractYouTubeVideoId(music?.url),
            key: process.env.REACT_APP_GOOGLE_API_KEY,
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
    <Wrapper onClick={handleClick}>
      <ImageBox>
        <img src={musicImageUrl} alt='음악 이미지' />
      </ImageBox>
      <Right>
        <Title>{music.title}</Title>
        <Artist>{music.artist}</Artist>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #000;
  border-radius: 12px;
  min-width: 300px;
  width: 100%;

  display: flex;
  gap: 16px;

  padding: 8px 20px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ImageBox = styled.div`
  border: 1px solid #000;
  border-radius: 50%;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const Title = styled.div`
  font-size: 16px;
`;

const Artist = styled.div`
  font-size: 12px;
`;

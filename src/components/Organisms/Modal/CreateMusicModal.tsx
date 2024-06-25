import useModalStore from '../../../../store/useModalStore';
import Button from '../../Atoms/Modal/Button';
import { useState } from 'react';
import axios from 'axios';
import Dimmed from '../../Atoms/Modal/Dimmed';
import { FormField, Input, Label, Wrapper, Form, Title, Description } from '../../Atoms/Modal/Main.style';

interface CreateMusicModalProps {
  channelId: string | undefined;
}

export default function CreateMusicModal({ channelId }: CreateMusicModalProps) {
  const { isOpen, closeModal, modalType } = useModalStore();

  if (!isOpen || modalType !== 'CREATE_MUSIC') return null;

  const [musicData, setMusicData] = useState({
    title: '',
    artist: '',
    url: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicData({
      ...musicData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call API to create music
    createMusic();
    console.log('create music');
    closeModal();
    setMusicData({
      title: '',
      artist: '',
      url: '',
    });
  };

  const createMusic = async () => {
    const music = {
      channelId: channelId,
      title: musicData.title,
      artist: musicData.artist,
      url: musicData.url,
    };
    try {
      const response = await axios.post('http://localhost:8080/api/musics', {
        music,
      });
      console.log(response.data);
      setMusicData({
        title: '',
        artist: '',
        url: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dimmed>
      <Wrapper>
        <Title>음악 생성</Title>
        <Description>플레이리스트에 추가하고 싶은 음악 URL을 넣어주세요</Description>

        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor='title'>Title</Label>
            <Input
              name='title'
              value={musicData.title}
              onChange={handleChange}
              placeholder='음악 제목을 입력하세요.'
              type='text'
            />
          </FormField>

          <FormField>
            <Label htmlFor='artist'>Artist</Label>
            <Input
              name='artist'
              value={musicData.artist}
              onChange={handleChange}
              placeholder='아티스트 이름을 입력하세요'
              type='text'
            />
          </FormField>

          <FormField>
            <Label htmlFor='url'>Music URL</Label>
            <Input
              name='url'
              value={musicData.url}
              onChange={handleChange}
              placeholder='유튜브 영상 URL을 입력해주세요'
              type='text'
            />
          </FormField>
          <Button variant='confirm' type='submit'>
            생성
          </Button>
          <Button variant='close' type='button' onClick={closeModal}>
            취소
          </Button>
        </Form>
      </Wrapper>
    </Dimmed>
  );
}

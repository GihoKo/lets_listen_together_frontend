import { useState } from 'react';
import useModalStore from '../../../store/useModalStore';
import Button from '../../Atoms/Modal/Button';
import Dimmed from '../../Atoms/Modal/Dimmed';
import { ButtonWrapper, Form, FormField, Input, Label, Title, Wrapper } from '../../Atoms/Modal/StyledComponents';
import { useParams } from 'react-router-dom';
import { Music } from '@prisma/client';
import { ModalType } from '../../../types/enum';
import useUpdateMusic from '../../../apis/hooks/useUpdateMusic';

interface EditMusicModalProps {
  music: Music;
}

export default function EditMusicModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.EDIT_MUSIC) return null;

  const modalProps = props as EditMusicModalProps;

  const upLoadUpdateMusicMutation = useUpdateMusic();
  const { channelId } = useParams<{ channelId: string }>();
  const [musicData, setMusicData] = useState({
    title: modalProps.music.title,
    artist: modalProps.music.artist,
    url: modalProps.music.url,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicData({
      ...musicData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call API to update music
    const edittedMusic = {
      channelId: channelId,
      title: musicData.title,
      artist: musicData.artist,
      url: musicData.url,
    };
    upLoadUpdateMusicMutation.mutate({ musicId: modalProps.music.id, music: edittedMusic });
    closeModal();
  };

  return (
    <Dimmed>
      <Wrapper>
        <Title>음악 수정</Title>

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
          <ButtonWrapper>
            <Button variant='confirm' type='submit'>
              수정
            </Button>
            <Button variant='close' type='button' onClick={closeModal}>
              취소
            </Button>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </Dimmed>
  );
}

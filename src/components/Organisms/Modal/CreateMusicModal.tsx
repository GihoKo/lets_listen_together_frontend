import Button from '../../Atoms/Modal/Button';
import { useState } from 'react';
import Dimmed from '../../Atoms/Modal/Dimmed';
import {
  FormField,
  Input,
  Label,
  Wrapper,
  Form,
  Title,
  Description,
  ButtonWrapper,
} from '../../Atoms/Modal/Main.style';
import useModalStore from '../../../store/useModalStore';
import { ModalType } from '../../../types/enum';
import useCreateMusic from '../../../apis/hooks/useCreateMusic';

export default function CreateMusicModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.CREATE_MUSIC) return null;

  const upLoadMusicMutation = useCreateMusic();
  const modalProps = props as { channelId: string };
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
    const music = {
      channelId: modalProps.channelId,
      title: musicData.title,
      artist: musicData.artist,
      url: musicData.url,
    };
    upLoadMusicMutation.mutate({ music });
    closeModal();
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
          <ButtonWrapper>
            <Button variant='confirm' type='submit'>
              생성
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

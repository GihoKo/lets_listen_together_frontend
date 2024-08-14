// hooks
import useCreateMusicModal from './CreateMusicModal.hook';

// components
import Button from '../../../Atoms/Modal/Button/Button';
import Dimmed from '../../../Atoms/Modal/Dimmed';
import {
  FormField,
  Input,
  Label,
  Wrapper,
  Form,
  Title,
  Description,
  ButtonWrapper,
  ErrorMessage,
} from '../../../Atoms/Modal/StyledComponents';

export default function CreateMusicModal() {
  // logics
  const Logics = useCreateMusicModal();

  if (!Logics) return null;

  const { musicData, errorMessage, handleChange, handleSubmit, closeModal } = Logics;

  // view
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
              maxLength={20}
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
              maxLength={20}
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

          {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}

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

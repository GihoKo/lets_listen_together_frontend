// hooks
import useEditMusicModal from './EditMusicModal.hook';

// components
import Button from '../../Atoms/Modal/Button';
import Dimmed from '../../Atoms/Modal/Dimmed';
import { ButtonWrapper, Form, FormField, Input, Label, Title, Wrapper } from '../../Atoms/Modal/StyledComponents';

export default function EditMusicModal() {
  // logics
  const logics = useEditMusicModal();

  if (!logics) return null;

  const { musicData, handleChange, handleSubmit, closeModal } = logics;

  // view
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

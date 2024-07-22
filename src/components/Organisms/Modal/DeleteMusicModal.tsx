// components
import Dimmed from '../../Atoms/Modal/Dimmed';
import { ButtonWrapper, Description, ErrorMessage, Form, Title, Wrapper } from '../../Atoms/Modal/StyledComponents';
import Button from '../../Atoms/Modal/Button';

// hooks
import useDeleteMusicModal from './DeleteMusicModal.hook';

export default function DeleteMusicModal() {
  // logics
  const logics = useDeleteMusicModal();

  if (!logics) return null;

  const { handleSubmit, closeModal, modalProps, errorMessage } = logics;

  // view
  return (
    <Dimmed>
      <Wrapper>
        <Title>음악 삭제</Title>
        <Description>{`"${modalProps.music.title}"을(를) 삭제하시겠습니까?`}</Description>

        <Form onSubmit={handleSubmit}>
          {errorMessage === '' ? null : <ErrorMessage>{errorMessage}</ErrorMessage>}
          <ButtonWrapper>
            <Button variant='confirm' type='submit'>
              삭제
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

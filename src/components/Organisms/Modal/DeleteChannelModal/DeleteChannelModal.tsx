// hooks
import useDeleteChannelModal from './DeleteChannelModal.hook';

// components
import Dimmed from '../../../Atoms/Modal/Dimmed';
import { ButtonWrapper, Description, ErrorMessage, Form, Title, Wrapper } from '../../../Atoms/Modal/StyledComponents';
import Button from '../../../Atoms/Modal/Button';

export default function DeleteChannelModal() {
  // logics
  const logics = useDeleteChannelModal();

  if (!logics) return null;

  const { handleSubmit, closeModal, modalProps, errorMessage } = logics;

  // view
  return (
    <Dimmed>
      <Wrapper>
        <Title>채널 삭제</Title>
        <Description>{`"${modalProps.channelName}"을(를) 삭제하시겠습니까?`}</Description>
        {errorMessage === '' ? null : <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
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

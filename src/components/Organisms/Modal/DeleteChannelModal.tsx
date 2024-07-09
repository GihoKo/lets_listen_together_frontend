import Dimmed from '../../Atoms/Modal/Dimmed';
import { ButtonWrapper, Description, Form, Title, Wrapper } from '../../Atoms/Modal/Main.style';
import Button from '../../Atoms/Modal/Button';
import useModalStore from '../../../store/useModalStore';
import { ModalType } from '../../../types/enum';
import useDeleteChannel from '../../../../apis/hooks/useDeleteChannel';

export default function DeleteChannelModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.DELETE_CHANNEL) return null;

  const modalProps = props as { channelId: string; channelName: string };
  const upLoadDeleteChannelMutation = useDeleteChannel();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    upLoadDeleteChannelMutation.mutate({ channelId: modalProps.channelId });
    closeModal();
  };

  return (
    <Dimmed>
      <Wrapper>
        <Title>채널 삭제</Title>
        <Description>{`"${modalProps.channelName}"을(를) 삭제하시겠습니까?`}</Description>

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

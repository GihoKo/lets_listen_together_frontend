import Dimmed from '../../Atoms/Modal/Dimmed';
import { ButtonWrapper, Description, Form, Title, Wrapper } from '../../Atoms/Modal/StyledComponents';
import Button from '../../Atoms/Modal/Button';
import useModalStore from '../../../store/useModalStore';
import { Music } from '@prisma/client';
import { ModalType } from '../../../types/enum';
import useDeleteMusic from '../../../apis/hooks/useDeleteMusic';

export default function DeleteMusicModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.DELETE_MUSIC) return null;

  const modalProps = props as { music: Music };

  const upLoadDeleteMusicMutation = useDeleteMusic();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call API to delete music
    upLoadDeleteMusicMutation.mutate(modalProps.music.id);
    closeModal();
  };

  return (
    <Dimmed>
      <Wrapper>
        <Title>음악 삭제</Title>
        <Description>{`"${modalProps.music.title}"을(를) 삭제하시겠습니까?`}</Description>

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

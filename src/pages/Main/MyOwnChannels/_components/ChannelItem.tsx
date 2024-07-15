// libraries
import styled from 'styled-components';

// images
import playListSvg from '@/images/svg/playlist.svg';
import playListFocusedSvg from '@/images/svg/playlist-focused.svg';
import deleteSvg from '@/images/svg/delete.svg';
import deleteFocusedSvg from '@/images/svg/delete-focused.svg';
import editSvg from '@/images/svg/edit.svg';
import editFocusedSvg from '@/images/svg/edit-focused.svg';

// hooks
import useChannelItem from './ChannelItem.hook';

// types
import { ChannelItemProps } from './ChannelItem.type';

export default function ChannelItem({ channel, EdittedChannel, onEditButtonClick }: ChannelItemProps) {
  // logics
  const { isEditted, handleDeleteModalButtonClick } = useChannelItem({ channel, EdittedChannel });

  // view
  return (
    <Wrapper $isEditted={isEditted}>
      <Left>
        <IconButton type='button'>
          <img src={isEditted ? playListFocusedSvg : playListSvg} alt='채널 아이콘 이미지' />
        </IconButton>
        <Name $isEditted={isEditted}> {channel.name}</Name>
      </Left>
      <Right>
        <IconButton
          type='button'
          onClick={() => {
            onEditButtonClick(channel);
          }}
        >
          <img src={isEditted ? editFocusedSvg : editSvg} alt='수정 아이콘 이미지' />
        </IconButton>
        <IconButton type='button' onClick={handleDeleteModalButtonClick}>
          <img src={isEditted ? deleteFocusedSvg : deleteSvg} alt='삭제 아이콘 이미지' />
        </IconButton>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.li<{
  $isEditted: boolean;
}>`
  width: 100%;
  border: 1px solid ${(props) => (props.$isEditted ? 'var(--mint5)' : 'var(--grey-grey300)')};
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  background-color: ${(props) => (props.$isEditted ? 'var(--mint8)' : 'transparent')};
  padding: 16px;
`;

const IconButton = styled.button`
  width: 24px;
  height: 24px;

  padding: 0;

  transition: all 0.2s;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &:hover {
    scale: 1.1;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Name = styled.span<{
  $isEditted: boolean;
}>`
  font-size: 16px;
  color: ${(props) => (props.$isEditted ? 'var(--mint5)' : 'var(--grey-grey600)')};
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

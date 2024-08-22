// libraries
import styled from 'styled-components';

// images
import playListSvg from '@/images/svg/playlist.svg';
import deleteSvg from '@/images/svg/delete.svg';
import editSvg from '@/images/svg/edit.svg';

// hooks
import useChannelItem from './ChannelItem.hook';

// types
import { ChannelItemProps } from './ChannelItem.type';

export default function ChannelItem({ channel }: ChannelItemProps) {
  // logics
  const { handleDeleteModalButtonClick, handleEditModalButtonClick } = useChannelItem({ channel });

  // view
  return (
    <Wrapper>
      <Left>
        <ImageWrapper>
          <img src={channel?.image ? channel?.image : playListSvg} alt='채널 아이콘 이미지' />
        </ImageWrapper>
        <Name> {channel.name}</Name>
      </Left>
      <Right>
        <IconButton type='button' onClick={handleEditModalButtonClick}>
          <img src={editSvg} alt='수정 아이콘 이미지' />
        </IconButton>
        <IconButton type='button' onClick={handleDeleteModalButtonClick}>
          <img src={deleteSvg} alt='삭제 아이콘 이미지' />
        </IconButton>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  width: 100%;
  border: 1px solid var(--grey-grey300);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  background-color: var(--grey-grey200);
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

const ImageWrapper = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

const Name = styled.span`
  font-size: 16px;
  color: var(--grey-grey600);
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

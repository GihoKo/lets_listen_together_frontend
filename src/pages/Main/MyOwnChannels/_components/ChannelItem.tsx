import styled from 'styled-components';
import { Channel } from '../../../../types/channel';
import playListSvg from '../../../../../src/images/svg/playlist.svg';
import deleteSvg from '../../../../../src/images/svg/delete.svg';
import editSvg from '../../../../../src/images/svg/edit.svg';
import { Dispatch, SetStateAction } from 'react';

interface ChannelItemProps {
  channel: Channel;
  setEdittedChannel: Dispatch<SetStateAction<Channel | null>>;
}

export default function ChannelItem({ channel, setEdittedChannel }: ChannelItemProps) {
  const handleEditButtonClick = () => (channel: Channel) => {
    setEdittedChannel(channel);
  };

  return (
    <Wrapper>
      <Left>
        <IconButton type='button'>
          <img src={playListSvg} alt='채널 아이콘 이미지' />
        </IconButton>
        {channel.name}
      </Left>
      <Right>
        <IconButton type='button' onClick={handleEditButtonClick}>
          <img src={editSvg} alt='수정 아이콘 이미지' />
        </IconButton>
        <IconButton type='button'>
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

  color: var(--grey-grey500);
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

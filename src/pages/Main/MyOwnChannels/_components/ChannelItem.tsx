import styled from 'styled-components';
import { Channel } from '../../../../types/channel';
import playListSvg from '../../../../../src/images/svg/playlist.svg';
import deleteSvg from '../../../../../src/images/svg/delete.svg';
import editSvg from '../../../../../src/images/svg/edit.svg';

interface ChannelItemProps {
  channel: Channel;
}

export default function ChannelItem({ channel }: ChannelItemProps) {
  return (
    <Wrapper>
      <Left>
        <Icon>
          <img src={playListSvg} alt='채널 아이콘 이미지' />
        </Icon>
        {channel.name}
      </Left>
      <Right>
        <Icon>
          <img src={editSvg} alt='수정 아이콘 이미지' />
        </Icon>
        <Icon>
          <img src={deleteSvg} alt='삭제 아이콘 이미지' />
        </Icon>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid var(--grey-grey300);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  padding: 16px;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;

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

import styled from 'styled-components';
import { SideBarChannelItemProps } from '../../types/props';
import { Link } from 'react-router-dom';
import mockImage from '../../../images/dummyImage.png';

export default function ChannelItem({ channel, isOpen, isCurrentChannel }: SideBarChannelItemProps) {
  return (
    <Wrapper to={`/main/channel/${channel.id}`} $isCurrentChannel={isCurrentChannel}>
      <ChannelImageBox>
        <img src={mockImage} alt='채널 이미지' />
      </ChannelImageBox>
      <ChannelName $isOpen={isOpen} $isCurrentChannel={isCurrentChannel}>
        {channel.name ? channel.name : ''}
      </ChannelName>
    </Wrapper>
  );
}

const Wrapper = styled(Link)<{ $isCurrentChannel: boolean }>`
  box-sizing: border-box;
  border-radius: 6px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  background-color: ${(props) => (props.$isCurrentChannel ? 'var(--yellow-galaxyYellowDark1)' : 'transparent')};
  box-shadow: ${(props) => (props.$isCurrentChannel ? '0 0 10px var(--yellow-galaxyYellowDark1)' : 'none')};
  padding: 8px;

  cursor: pointer;

  &:hover {
    background-color: var(--grey-grey250);
  }
`;

const ChannelImageBox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-shrink: 0;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const ChannelName = styled.div<{ $isOpen: boolean; $isCurrentChannel: boolean }>`
  width: 100%;

  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  font-size: 16px;
  color: ${(props) => (props.$isCurrentChannel ? 'var(--grey-grey900)' : 'var(--grey-grey600)')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;
`;

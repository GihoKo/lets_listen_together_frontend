import styled from 'styled-components';
import { Channel } from '../../types/interface';
import { Link } from 'react-router-dom';
import TagContainer from './../../Molcules/Content/TagContainer';
import mockImage from '../../../images/dummyImage.png';

interface ChannelItemProps {
  channel: Channel;
}

export default function ChannelItem({ channel }: ChannelItemProps) {
  return (
    <Wrapper to={`/main/channel/${channel.id}`}>
      <Positioner>
        <Image src={mockImage} alt={channel?.name} />
        <UserCount>{channel?.ChannelUsers?.length > 0 ? channel?.ChannelUsers?.length : '0'}</UserCount>
      </Positioner>
      <TagContainer tags={channel?.tags} />
      <Name>{channel?.name}</Name>
      <Description>{channel?.description}</Description>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  border-radius: 12px;
  width: 100%;
  height: 280px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  padding: 12px;

  position: relative;

  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-3%);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Positioner = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const UserCount = styled.div`
  border-radius: 6px;
  width: 36px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: var(--white);

  position: absolute;
  top: 18px;
  right: 18px;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 16px;
`;

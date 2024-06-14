import styled from 'styled-components';
import { Channel } from '../../types/interface';
import { Link } from 'react-router-dom';
import TagContainer from './../../Molcules/Content/TagContainer';

interface ChannelItemProps {
  channel: Channel;
}

export default function ChannelItem({ channel }: ChannelItemProps) {
  return (
    <Wrapper to={`/main/channel/${channel.id}`}>
      <Positioner>
        <Image src={channel?.image} alt={channel?.name} />
        <UserCount>U{channel?.ChannelUsers?.length}</UserCount>
      </Positioner>
      <TagContainer tags={channel?.tags} />
      <Name>{channel?.name}</Name>
      <Description>{channel?.description}</Description>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  border: 1px solid black;
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
`;

const Positioner = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  border: 1px solid black;
  border-radius: 12px;
  width: 240px;
  height: 120px;
  object-fit: cover;
`;

const UserCount = styled.div`
  border: 1px solid black;
  border-radius: 12px;
  width: 48px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const Name = styled.div`
  font-size: 20px;
`;

const Description = styled.div`
  font-size: 16px;
`;

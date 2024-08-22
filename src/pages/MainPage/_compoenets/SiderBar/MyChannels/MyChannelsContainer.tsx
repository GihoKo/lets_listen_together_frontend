// libraries
import styled from 'styled-components';

// components
import ChannelItem from '../Channel/ChannelItem';

// types
import { MyChannelsContainerProps } from './MyChannelsContainer.type';

// hooks
import useMyChannelsContainer from './MyChannelsContainer.hook';

export default function MyChannelsContainer({ isOpen }: MyChannelsContainerProps) {
  // logics
  const { channelList, channelId } = useMyChannelsContainer();

  // view
  if (!channelList) return null;

  return (
    <Container>
      {channelList.map((channel) => (
        <ChannelItem key={channel.id} channel={channel} isOpen={isOpen} isCurrentChannel={channelId === channel.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid var(--grey-grey300);
  height: 240px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1024px) {
    padding: 8px 0;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

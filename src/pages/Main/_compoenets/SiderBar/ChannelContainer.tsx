// libraries
import styled from 'styled-components';

// hooks
import useChannelContainer from './ChannelContainer.hook';

// components
import ChannelItem from './ChannelItem';

// types
import { ChannelContainerProps } from './ChannelContainer.type';

export default function ChannelContainer({ isOpen }: ChannelContainerProps) {
  // logics
  const { channelList, isError, isLoading, channelId } = useChannelContainer();

  // view
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!channelList) return <div>Channel is empty</div>;

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
    padding: 8px;
  }
`;

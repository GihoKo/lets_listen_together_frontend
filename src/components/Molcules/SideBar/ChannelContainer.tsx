import styled from 'styled-components';
import ChannelItem from './ChannelItem';
import useGetMyChannel from '../../../../apis/hooks/useGetAllChannel';
import { useUserStore } from '../../../store/useUserStore';
import { useParams } from 'react-router-dom';

interface ChannelContainerProps {
  isOpen: boolean;
}

export default function ChannelContainer({ isOpen }: ChannelContainerProps) {
  const { user } = useUserStore();
  const userId = user?.id;
  const { data: channelList, error, isLoading } = useGetMyChannel(userId);

  // channelId
  const { channelId } = useParams();

  if (isLoading) return <div>Loading...</div>;
  if (!channelList) return <div>Channel is empty</div>;
  if (error) return <div>Error</div>;

  return (
    <Container>
      {channelList.map((channel) => (
        <ChannelItem key={channel.id} channel={channel} isOpen={isOpen} isCurrentChannel={channelId === channel.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

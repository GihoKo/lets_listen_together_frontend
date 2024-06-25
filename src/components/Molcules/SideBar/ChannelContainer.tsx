import styled from 'styled-components';
import ChannelItem from './ChannelItem';
import { ChannelContainerProps } from '../../types/interface';
import useGetAllChannel from '../../../../apis/hooks/useGetAllChannel';

export default function ChannelContainer({ isOpen }: ChannelContainerProps) {
  const { data: channelList, error, isLoading } = useGetAllChannel();

  if (isLoading) return <div>Loading...</div>;
  if (!channelList) return <div>Channel is empty</div>;
  if (error) return <div>Error</div>;

  return (
    <Container>
      {channelList.map((channel) => (
        <ChannelItem key={channel.id} channel={channel} isOpen={isOpen} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

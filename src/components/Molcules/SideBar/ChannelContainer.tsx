import styled from 'styled-components';
import ChannelItem from './ChannelItem';
import { Channel, ChannelContainerProps } from '../../types/interface';
import { useEffect, useState } from 'react';
import useGetAllChannel from '../../../../apis/hooks/useGetAllChannel';

export default function ChannelContainer({ isOpen }: ChannelContainerProps) {
  const [channelList, setChannelList] = useState<Channel[]>([]);

  const { data, error, isLoading } = useGetAllChannel();

  useEffect(() => {
    if (data) {
      setChannelList(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
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

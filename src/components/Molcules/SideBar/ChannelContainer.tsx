import styled from 'styled-components';
import ChannelItem from './ChannelItem';
import { Channel, ChannelContainerProps } from '../../types/interface';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ChannelContainer({ isOpen }: ChannelContainerProps) {
  const [channelList, setChannelList] = useState<Channel[]>([]);

  const getChannelList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/channels');
      setChannelList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getChannelList();
  }, []);

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

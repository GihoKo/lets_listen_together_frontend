import styled from 'styled-components';
import ChannelItem from './ChannelItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Channel } from '../../types/interface';

export default function ChannelContainer() {
  const [channels, setChannels] = useState<Channel[]>([]);
  useEffect(() => {
    const getAllChannel = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/channels');
        setChannels(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllChannel();
  }, []);

  return (
    <>
      <Container>
        {channels.map((channel) => (
          <ChannelItem key={channel.id} channel={channel} />
        ))}
      </Container>
    </>
  );
}

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px 24px;

  padding: 0 24px;

  margin-top: 56px;
`;

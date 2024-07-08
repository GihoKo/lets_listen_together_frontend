import styled from 'styled-components';
import ChannelItem from './ChannelItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Channel } from '../../../types/channel';

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
    <Wrapper>
      <Title>Channel List</Title>
      <Container>
        {channels.map((channel) => (
          <ChannelItem key={channel.id} channel={channel} />
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 32px;
`;

const Title = styled.h1`
  border-bottom: 2px solid var(--grey-grey300);

  font-size: 56px;
  font-weight: bold;
  padding-bottom: 24px;
`;

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  gap: 24px 24px;

  padding: 24px;
`;

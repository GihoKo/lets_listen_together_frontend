import styled from 'styled-components';
import ChannelItem from './ChannelItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Channel } from '../../../types/channel';
import MainTitle from '../../Atoms/Text/MainTitle';

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
      <MainTitle>Channel List</MainTitle>
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

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px 24px;

  padding: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

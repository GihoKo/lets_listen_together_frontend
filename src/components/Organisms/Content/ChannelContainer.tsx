import styled from 'styled-components';
import ChannelItem from './ChannelItem';
import { useEffect, useState } from 'react';
import { Channel } from '../../../types/channel';
import MainTitle from '../../Atoms/Text/MainTitle';
import useGetAllChannels from '../../../../apis/hooks/useGetAllChannels';

export default function ChannelContainer() {
  const [channels, setChannels] = useState<Channel[] | null>(null);
  const { data } = useGetAllChannels();

  useEffect(() => {
    if (data) {
      setChannels(data);
    }
  }, [data]);

  if (!channels) {
    return <div>Loading...</div>;
  }

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

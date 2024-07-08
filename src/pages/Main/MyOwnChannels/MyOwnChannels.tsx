import { useEffect, useState } from 'react';
import useGetMyOwnChannels from '../../../../apis/hooks/useGetMyOwnChannels';
import { useUserStore } from '../../../store/useUserStore';
import { UserId } from '../../../types/user';
import styled from 'styled-components';
import { Channel } from '../../../types/channel';
import ChannelItem from './_components/ChannelItem';
import ChannelEidtor from './_components/ChannelEidtor';

export default function MyOwnChannels() {
  const { user } = useUserStore();
  const [channels, setChannels] = useState<Channel[]>([]);
  const [EdittedChannel, setEdittedChannel] = useState<Channel | null>(null);
  const { data } = useGetMyOwnChannels(user?.id as UserId);

  useEffect(() => {
    if (data) {
      setChannels(data);
    }
  }, [data]);

  return (
    <Wrapper>
      <Title>MyOwnChannels</Title>
      <Content>
        <Left>
          <Container>
            {channels?.map((channel) => (
              <ChannelItem key={channel.id} channel={channel} setEdittedChannel={setEdittedChannel} />
            ))}
          </Container>
        </Left>
        <CenterLine />
        <Rignt>
          <ChannelEidtor EdittedChannel={EdittedChannel} />
        </Rignt>
      </Content>
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
  padding-bottom: 24px;

  font-size: 56px;
  font-weight: bold;
`;

const Content = styled.div`
  flex-grow: 1;

  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 32px;
`;

const CenterLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: var(--grey-grey300);
`;

const Rignt = styled.div`
  width: 50%;
`;

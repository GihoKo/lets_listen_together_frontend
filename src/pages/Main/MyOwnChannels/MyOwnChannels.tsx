import { useEffect, useState } from 'react';
import useGetMyOwnChannels from '../../../../apis/hooks/useGetMyOwnChannels';
import { useUserStore } from '../../../store/useUserStore';
import styled from 'styled-components';
import { Channel } from '../../../types/channel';
import ChannelItem from './_components/ChannelItem';
import ChannelEditor from './_components/ChannelEditor';
import MainTitle from '../../../components/Atoms/Text/MainTitle';

export default function MyOwnChannels() {
  const { user } = useUserStore();
  const [channels, setChannels] = useState<Channel[]>([]);
  const [EdittedChannel, setEdittedChannel] = useState<Channel | null>(null);
  const { data } = useGetMyOwnChannels(user?.id as string);

  const handleEditButtonClick = (channel: Channel) => {
    setEdittedChannel(channel);
  };

  useEffect(() => {
    if (data) {
      setChannels(data);
    }
  }, [data]);

  return (
    <Wrapper>
      <MainTitle>MyOwnChannels</MainTitle>
      <Content>
        <Left>
          <Container>
            <ContentTitle>ChannelList</ContentTitle>
            {channels?.map((channel) => (
              <ChannelItem
                key={channel.id}
                channel={channel}
                onEditButtonClick={handleEditButtonClick}
                EdittedChannel={EdittedChannel}
              />
            ))}
          </Container>
        </Left>
        <CenterLine />
        <Rignt>
          <ContentTitle>ChannelEditor</ContentTitle>
          <ChannelEditor EdittedChannel={EdittedChannel} setEdittedChannel={setEdittedChannel}></ChannelEditor>
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

const Content = styled.div`
  flex-grow: 1;

  display: flex;

  padding-bottom: 64px;
`;

const Left = styled.div`
  width: 50%;

  padding-top: 16px;
  padding-right: 32px;
  padding-left: 32px;
`;

const ContentTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 16px;
`;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CenterLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: var(--grey-grey300);
`;

const Rignt = styled.div`
  width: 50%;

  padding-top: 16px;
  padding-right: 32px;
  padding-left: 32px;
`;

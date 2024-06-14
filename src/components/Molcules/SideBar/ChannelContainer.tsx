import styled from 'styled-components';
import { myChannelMocks } from '../../../mocks';
import ChannelItem from './ChannelItem';
import { ChannelContainerProps } from '../../types/interface';

export default function ChannelContainer({ isOpen }: ChannelContainerProps) {
  return (
    <Container>
      {myChannelMocks.map((channel) => (
        <ChannelItem key={channel.id} channel={channel} isOpen={isOpen} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from 'styled-components';
import { Channel } from '../../../../types/channel';

interface ChannelEidtorProps {
  EdittedChannel: Channel | null;
}

export default function ChannelEidtor({ EdittedChannel }: ChannelEidtorProps) {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

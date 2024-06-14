import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function ChannelName() {
  const { pathname } = useLocation();
  const { channelId } = useParams();

  if (pathname.includes('myPage')) {
    return (
      <Positioner>
        <GoToMain to='/main'>{'<'}</GoToMain>
        {'My Page'}
      </Positioner>
    );
  }

  if (pathname.includes('channel')) {
    return (
      <Positioner>
        <GoToMain to='/main'>{'<'}</GoToMain>
        {`Channel ${channelId}`}
      </Positioner>
    );
  }

  return <Wrapper>{'Channel List'}</Wrapper>;
}

const Wrapper = styled.div`
  font-size: 20px;
`;

const GoToMain = styled(Link)`
  display: flex;
  align-items: center;
`;

const Positioner = styled.div`
  display: flex;
  gap: 8px;
`;

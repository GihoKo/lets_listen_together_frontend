import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Channel } from '../../types/interface';

export default function ChannelName() {
  const { pathname } = useLocation();
  const { channelId } = useParams();
  const [channelName, setChannelName] = useState<string | undefined>('');

  const getChannelName = async () => {
    console.log(channelId);
    try {
      const response = await axios.get<Channel>(`http://localhost:8080/api/channels/${channelId}`);
      setChannelName(response.data.name);
      console.log(response.data.name);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getChannelName();
  }, [channelId]);

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
        {channelName}
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

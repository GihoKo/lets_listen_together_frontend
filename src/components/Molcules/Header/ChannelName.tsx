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
    try {
      const response = await axios.get<Channel>(`http://localhost:8080/api/channels/${channelId}`);
      setChannelName(response.data.name);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getChannelName();
  }, [channelId]);

  if (pathname.includes('myPage')) {
    return (
      <Wrapper>
        <GoToMain to='/main'>
          {'<'} {'My Page'}
        </GoToMain>
      </Wrapper>
    );
  }

  if (pathname.includes('channel')) {
    return (
      <Wrapper>
        <GoToMain to='/main'>
          {'<'} {channelName}
        </GoToMain>
      </Wrapper>
    );
  }

  return <Wrapper>{'채널 목록'}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;

  font-size: 20px;
`;

const GoToMain = styled(Link)`
  border-radius: 12px;

  display: flex;
  align-items: center;
  padding: 8px 24px;

  cursor: pointer;

  &:hover {
    background-color: var(--gray-, #eeeeee);
  }
`;

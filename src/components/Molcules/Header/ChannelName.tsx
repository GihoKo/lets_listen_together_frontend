import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Channel } from '../../types/interface';
import backLeftSvg from '../../../images/svg/back-left.svg';

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
          <SvgWrapper>
            <img src={backLeftSvg} alt='뒤로가기' />
          </SvgWrapper>
          <Title>{'My Page'}</Title>
        </GoToMain>
      </Wrapper>
    );
  }

  if (pathname.includes('channel')) {
    return (
      <Wrapper>
        <GoToMain to='/main'>
          <SvgWrapper>
            <img src={backLeftSvg} alt='뒤로가기' />
          </SvgWrapper>
          <Title>{channelName}</Title>
        </GoToMain>
      </Wrapper>
    );
  }

  return <Wrapper>{'채널 목록'}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  gap: 16px;

  font-size: 20px;
`;

const GoToMain = styled(Link)`
  border-radius: 12px;

  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 12px;

  cursor: pointer;

  &:hover {
    background-color: var(--gray-, #eeeeee);
  }
`;

const SvgWrapper = styled.div`
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const Title = styled.div`
  cursor: pointer;
`;

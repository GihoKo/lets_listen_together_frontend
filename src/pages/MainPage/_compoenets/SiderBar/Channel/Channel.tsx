// libraries
import styled from 'styled-components';

// hooks
import useChannel from './Channel.hook';

// components
import { Link } from 'react-router-dom';

// types
import { SideBarChannelProps } from './Channel.type';

export default function Channel({ channel, isOpen, isCurrentChannel }: SideBarChannelProps) {
  // logics
  const { handleDefaultPlayListImageToggle } = useChannel({ isCurrentChannel });

  // view
  return (
    <Wrapper to={`/main/channel/${channel.id}`} $isCurrentChannel={isCurrentChannel}>
      <ImageWrapper>
        <img src={channel.image === '' ? handleDefaultPlayListImageToggle() : channel.image} alt='채널 이미지' />
      </ImageWrapper>
      <Name $isOpen={isOpen} $isCurrentChannel={isCurrentChannel}>
        {channel.name ? channel.name : ''}
      </Name>
    </Wrapper>
  );
}

const Wrapper = styled(Link)<{ $isCurrentChannel: boolean }>`
  box-sizing: border-box;
  border: ${(props) => (props.$isCurrentChannel ? '2px solid var(--mint5)' : '2px solid transparent')};
  border-radius: 6px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  background-color: ${(props) => (props.$isCurrentChannel ? 'var(--mint7)' : 'transparent')};
  box-shadow: ${(props) => (props.$isCurrentChannel ? '0 0 5px var(--mint5)' : 'none')};
  padding: 8px;
  padding-left: 6px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$isCurrentChannel ? 'var(--mint7)' : 'var(--grey-grey300)')};
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const ImageWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-shrink: 0;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const Name = styled.div<{ $isOpen: boolean; $isCurrentChannel: boolean }>`
  width: 100%;

  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  font-size: 16px;
  color: ${(props) => (props.$isCurrentChannel ? 'var(--mint3)' : 'var(--grey-grey600)')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
    font-size: 14px;
  }
`;

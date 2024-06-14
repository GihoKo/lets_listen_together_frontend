import styled from 'styled-components';
import { SideBarChannelItemProps } from '../../types/interface';
import { Link } from 'react-router-dom';

export default function ChannelItem({ channel, isOpen }: SideBarChannelItemProps) {
  return (
    <Wrapper to={`/main/channel/${channel.id}`}>
      <ChannelImageBox>
        <img src={channel.image} />
      </ChannelImageBox>
      <ChannelName $isOpen={isOpen}>{channel.name ? channel.name : ''}</ChannelName>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  box-sizing: border-box;
  border-radius: 12px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  padding: 8px;

  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ChannelImageBox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid black;
  flex-shrink: 0;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ChannelName = styled.div<{ $isOpen: boolean }>`
  width: 100%;

  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

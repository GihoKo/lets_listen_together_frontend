import styled from 'styled-components';
import { SideBarChannelItemProps } from '../../types/interface';
import { Link } from 'react-router-dom';
import mockImage from '../../../images/dummyImage.png';

export default function ChannelItem({ channel, isOpen }: SideBarChannelItemProps) {
  return (
    <Wrapper to={`/main/channel/${channel.id}`}>
      <ChannelImageBox>
        <img src={mockImage} alt='채널 이미지' />
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
  justify-content: space-between;
  gap: 24px;

  padding: 8px;

  cursor: pointer;

  &:hover {
    background-color: var(--gray8);
  }
`;

const ChannelImageBox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-shrink: 0;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

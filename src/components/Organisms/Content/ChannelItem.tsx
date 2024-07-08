import styled from 'styled-components';
import { Channel } from '../../../types/channel';
import { Link } from 'react-router-dom';
import TagContainer from './../../Molcules/Content/TagContainer';
import mockImage from '../../../images/dummyImage.png';
import personSvg from '../../../images/svg/person.svg';

interface ChannelItemProps {
  channel: Channel;
}

export default function ChannelItem({ channel }: ChannelItemProps) {
  return (
    <Border>
      <Wrapper to={`/main/channel/${channel.id}`}>
        <Positioner>
          <Image src={mockImage} alt={channel?.name} />
          <UserCount>
            <img src={personSvg} alt='참여자수 이미지' />
            {channel?.ChannelUsers?.length > 0 ? channel?.ChannelUsers?.length : '0'}
          </UserCount>
        </Positioner>
        <TagContainer tags={channel?.tags} />
        <Name>{channel?.name}</Name>
        <Description>{channel?.description}</Description>
      </Wrapper>
    </Border>
  );
}

const Border = styled.div`
  border-radius: 12px;
  border: 2px solid var(--grey-grey100);

  transition: all 0.3s;

  &:hover {
    border: 2px solid var(--yellow-galaxyYellow);
  }
`;

const Wrapper = styled(Link)`
  border-radius: 12px;
  width: 100%;
  height: 280px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  padding: 12px;
  transition: all 0.2s;

  position: relative;

  cursor: pointer;

  &:hover {
    scale: 0.95;
  }
`;

const Positioner = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 120px;
  object-fit: cover;
  cursor: pointer;
`;

const UserCount = styled.div`
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: var(--grey-grey990);
  background-color: var(--grey-grey200);
  padding: 4px 8px;

  position: absolute;
  top: 18px;
  right: 18px;

  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--grey-grey990);

  cursor: pointer;

  &:hover {
    color: var(--yellow-galaxyYellow);
  }
`;

const Description = styled.div`
  font-size: 16px;
  color: var(--grey-grey600);

  cursor: pointer;

  &:hover {
    color: var(--yellow-galaxyYellow);
  }
`;

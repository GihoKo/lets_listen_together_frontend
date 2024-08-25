// libraries
import styled from 'styled-components';

// components
import { Link } from 'react-router-dom';
import TagContainer from './TagContainer/TagContainer';

// types
import { ChannelProps } from './Channel.type';

// images
import mockImage from '@/images/dummyImage.png';
import personSvg from '@/images/svg/person.svg';

export default function Channel({ channel }: ChannelProps) {
  return (
    <Border>
      <Wrapper to={`/main/channel/${channel.id}`}>
        <Positioner>
          <ImageWrapper>
            <img src={channel?.image ? channel.image : mockImage} alt='채널 이미지' />
          </ImageWrapper>
          <UserCount>
            <img src={personSvg} alt='참여자수 이미지' />
            {channel?.users.length}
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

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  transition: all 0.2s;

  position: relative;

  cursor: pointer;

  &:hover {
    scale: 0.95;
  }

  @media (max-width: 768px) {
  }
`;

const Positioner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  border-radius: 12px;
  width: 100%;

  aspect-ratio: 16 / 9;
  overflow: hidden;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
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

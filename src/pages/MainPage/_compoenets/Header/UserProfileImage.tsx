// libraries
import styled from 'styled-components';

// components
import { Link } from 'react-router-dom';

// types
import { UserProfileImageProps } from './UserProfileImage.type';

// images
import defaultProfileImage from '@/images/dummyImage.png';

export default function UserProfileImage({ profileImage }: UserProfileImageProps) {
  return (
    <Wrapper to='/main/profile'>
      <img src={profileImage ? profileImage : defaultProfileImage} />
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  border-radius: 50%;
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

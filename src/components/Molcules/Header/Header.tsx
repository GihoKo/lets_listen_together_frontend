import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ChannelName from './ChannelName';
import profileImage from '../../../images/dummyImage.png';

export default function Header() {
  return (
    <Wrapper>
      <ChannelName />
      <UserProfileImageBox to='/main/myPage'>
        <UserProfileImage src={profileImage} />
      </UserProfileImageBox>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 56px;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
`;

const UserProfileImageBox = styled(Link)`
  border: 1px solid #000;
  border-radius: 50%;
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const UserProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

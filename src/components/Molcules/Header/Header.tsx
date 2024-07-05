import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImg from '../../../images/logo.png';
import { useUserStore } from '../../../store/useUserStore';
import defaultProfileImage from '../../../images/dummyImage.png';

export default function Header() {
  const { user } = useUserStore();
  const profileImage = user?.profileImage;

  return (
    <Wrapper>
      <Logo>
        <img src={logoImg} alt='로고 이미지' />
      </Logo>
      <UserProfileImageLink to='/main/myPage'>
        <UserProfileImage src={profileImage ? profileImage : defaultProfileImage} />
      </UserProfileImageLink>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 72px;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
`;

const Logo = styled.div`
  height: 42px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const UserProfileImageLink = styled(Link)`
  border-radius: 50%;
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

const UserProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

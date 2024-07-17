// libraries
import styled from 'styled-components';

// hooks
import useHeader from './Header.hook';

// components
import Logo from './Logo';
import UserProfileImage from './UserProfileImage';
import ToggleSideBarButton from './ToggleSideBarButton';

export default function Header() {
  // logics
  const { profileImage } = useHeader();

  // view
  return (
    <Wrapper>
      <Left>
        <ToggleSideBarButton />
        <Logo />
      </Left>
      <UserProfileImage profileImage={profileImage} />
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

const Left = styled.div`
  display: flex;

  align-items: center;

  gap: 16px;
`;

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
  border-bottom: 1px solid var(--grey-grey300);
  width: 100%;
  height: 72px;
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--grey-grey150);
  padding: 0 16px;

  @media (max-width: 768px) {
    height: 56px;

    padding: 0 8px;
  }
`;

const Left = styled.div`
  display: flex;

  align-items: center;

  gap: 16px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

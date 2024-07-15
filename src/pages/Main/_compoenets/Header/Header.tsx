// libraries
import styled from 'styled-components';

// hooks
import useHeader from './Header.hook';

// components
import Logo from './Logo';
import UserProfileImage from './UserProfileImage';

export default function Header() {
  // logics
  const { profileImage } = useHeader();

  // view
  return (
    <Wrapper>
      <Logo />
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

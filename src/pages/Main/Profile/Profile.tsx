// libraries
import styled from 'styled-components';

// hooks
import useProfile from './Profile.hook';

// components
import MainTitle from '@/components/Atoms/Text/MainTitle';
import Description from '@/components/Molecules/Description';

export default function Profile() {
  // logics
  const { user } = useProfile();

  // view

  if (!user) return <NoUser>유저 정보를 불러오지 못했습니다. 로그인을 다시 해주세요.</NoUser>;
  return (
    <Wrapper>
      <MainTitle>Profile</MainTitle>
      <UserInfoBox>
        <Description title='Notice' text='유저 정보를 수정하고 싶다면 Google에서 수정해주세요.' />
        <UserInfoContent>
          <ContentTitle>UserInfo</ContentTitle>

          <Middle>
            <ProfileImageWrapper>
              <img src={user.profileImage} alt='profile' />
            </ProfileImageWrapper>
            <WelcomeMessage>
              안녕하세요
              <br />
              <WelcomeUserName>{user.nickName}</WelcomeUserName> 님!
            </WelcomeMessage>
          </Middle>

          <InfoContentItem>
            <InfoContentItemName>Email</InfoContentItemName>
            <InfoContentItemValue>{user.email}</InfoContentItemValue>
          </InfoContentItem>
          <InfoContentItem>
            <InfoContentItemName>NickName</InfoContentItemName>
            <InfoContentItemValue>{user.nickName}</InfoContentItemValue>
          </InfoContentItem>
        </UserInfoContent>
      </UserInfoBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const NoUser = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  color: var(--grey-grey600);
`;

const UserInfoBox = styled.div`
  border-radius: 16px;

  display: flex;
  gap: 32px;

  margin-top: 32px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;

    margin-top: 16px;
  }
`;

const UserInfoContent = styled.div`
  flex-grow: 1;
  max-width: 640px;
  border: 1px solid var(--grey-grey300);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 32px;

  background-color: var(--grey-grey150);

  @media (max-width: 992px) {
    width: 100%;
    max-width: none;
    padding: 16px;
  }
`;

const ContentTitle = styled.div`
  font-size: 20px;
  color: var(--grey-grey900);
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProfileImageWrapper = styled.div`
  border-radius: 50%;
  width: 48x;
  height: 48px;

  overflow: hidden;
  padding: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const WelcomeMessage = styled.div`
  font-size: 16px;
  color: var(--grey-grey600);
`;

const WelcomeUserName = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: var(--grey-grey900);
`;

const InfoContentItem = styled.div`
  border-radius: 16px;

  display: flex;
  justify-content: space-between;

  background-color: var(--grey-grey200);
  padding: 16px;
`;

const InfoContentItemName = styled.div`
  font-size: 18px;
  color: var(--grey-grey600);
`;

const InfoContentItemValue = styled.div`
  font-size: 16px;
  color: var(--grey-grey900);
`;

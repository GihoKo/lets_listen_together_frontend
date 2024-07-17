// libraries
import styled from 'styled-components';

// hooks
import useMyProfile from './MyProfile.hook';

// components
import MainTitle from '@/components/Atoms/Text/MainTitle';
import { ButtonWrapper, Form, FormField, Input, Label } from '@/components/Atoms/Modal/StyledComponents';
import Button from '@/components/Atoms/Modal/Button';

export default function MyProfile() {
  // logics
  const {
    previewProfileImageUrl,
    edittedUser,
    fileInputRef,
    handleSubmit,
    handleFileChange,
    handleInputChanege,
    handleProfileImageClick,
  } = useMyProfile();

  // view
  return (
    <Wrapper>
      <MainTitle>MyPage</MainTitle>

      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <ProfileImageLabel htmlFor='profileImage'>profileImage</ProfileImageLabel>
            <ProfileImageWrapper onClick={handleProfileImageClick}>
              <img
                src={previewProfileImageUrl ? previewProfileImageUrl : edittedUser?.profileImage}
                alt='프로필 이미지'
              />
            </ProfileImageWrapper>
            <FileInput
              name='profileImage'
              type='file'
              onChange={handleFileChange}
              accept='image/*'
              ref={fileInputRef}
            />
          </FormField>

          <FormField>
            <Label htmlFor='email'>Email</Label>
            <EmailInput name='email' type='email' value={edittedUser?.email} disabled />
          </FormField>

          <FormField>
            <Label htmlFor='nickName'>NickName</Label>
            <Input name='nickName' type='text' value={edittedUser?.nickName} onChange={handleInputChanege} />
          </FormField>

          <ButtonWrapper>
            <Button type='submit' variant='confirm'>
              적용
            </Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const FormWrapper = styled.div`
  width: 400px;

  padding-top: 32px;

  @media (max-width: 768px) {
    width: 100%;

    padding-top: 16px;
  }
`;

const ProfileImageWrapper = styled.button`
  border-radius: 16px;
  width: 240px;
  height: 240px;

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

const ProfileImageLabel = styled(Label)``;

const FileInput = styled.input`
  display: none;
`;

const EmailInput = styled(Input)`
  color: var(--grey-grey600);
`;

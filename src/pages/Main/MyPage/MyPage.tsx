import styled from 'styled-components';
import MainTitle from '../../../components/Atoms/Text/MainTitle';
import { ButtonWrapper, Form, FormField, Input, Label } from '../../../components/Atoms/Modal/Main.style';
import Button from '../../../components/Atoms/Modal/Button';
import { useUserStore } from '../../../store/useUserStore';
import { useRef, useState } from 'react';
import { User } from '../../../types/user';
import useUpdateUser from '../../../../apis/hooks/useUpdateUser';

export default function MyPage() {
  const UploadUpdateUserMutation = useUpdateUser();
  const { user } = useUserStore();
  const [edittedUser, setEdittedUser] = useState<User | null>(user);
  const [profileImageFile, setProfileImageFile] = useState<File | string | null>(user?.profileImage || null);
  const [previewProfileImageUrl, setpreviewProfileImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    if (edittedUser) {
      formData.append('id', edittedUser.id || '');
      formData.append('email', edittedUser.email || '');
      formData.append('nickName', edittedUser.nickName || '');
    }
    if (profileImageFile instanceof File) {
      formData.append('profileImage', profileImageFile);
    }

    UploadUpdateUserMutation.mutate({ userId: user?.id, user: formData });
  };

  const handleProfileImageClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이전 파일 제거
    setpreviewProfileImageUrl(null);
    setProfileImageFile(null);

    if (!e.target.files) return;
    const file = e.target.files?.[0];
    setProfileImageFile(file);

    // 파일 미리보기
    const fileUrl = URL.createObjectURL(file);
    setpreviewProfileImageUrl(fileUrl);
  };

  const handleInputChanege = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEdittedUser((prev) => (prev ? { ...prev, [name]: value } : null));
  };

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
`;

const FormWrapper = styled.div`
  width: 400px;

  padding-top: 32px;
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

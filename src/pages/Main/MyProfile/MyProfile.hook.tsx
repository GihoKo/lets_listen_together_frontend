// hooks
import useUpdateUser from '@/apis/hooks/useUpdateUser';
import { useUserStore } from '@/store/useUserStore';
import { useRef, useState } from 'react';

// types
import { User } from '@/types/user';

export default function useMyProfile() {
  const UploadUpdateUserMutation = useUpdateUser();
  const { user } = useUserStore();
  const [edittedUser, setEdittedUser] = useState<User | null>(user);
  const [profileImageFile, setProfileImageFile] = useState<File | string | null>(user?.profileImage || null);
  const [previewProfileImageUrl, setpreviewProfileImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /**
     * 일반적으로 바이너리 데이터를 전송할 때는 FormData를 사용한다.
     * FormData는 multipart/form-data 형식으로 데이터를 전송한다.
     *
     * 이외의 경우는 JSON 형식으로 데이터를 전송한다.
     */
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

  return {
    previewProfileImageUrl,
    edittedUser,
    fileInputRef,
    handleSubmit,
    handleFileChange,
    handleInputChanege,
    handleProfileImageClick,
  };
}

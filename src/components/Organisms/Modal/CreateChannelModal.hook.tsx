// hooks
import { useRef, useState } from 'react';
import { useUserStore } from '@/store/useUserStore';
import useCreateChannel from '@/apis/hooks/useCreateChannel';
import useModalStore from '@/store/useModalStore';

// types
import { ModalType } from '@/types/enum';

export default function useCreateChannelModal() {
  const { type, closeModal } = useModalStore();

  if (type !== ModalType.CREATE_CHANNEL) return null;

  const { user } = useUserStore();
  const [channelData, setChannelData] = useState({
    name: '',
    tags: [] as string[],
    description: '',
    image: '',
  });
  const [previewChannelImageUrl, setPreviewChannelImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [tagValue, setTagValue] = useState<string>('');
  const uploadCreateChannel = useCreateChannel();

  const handleChannelImageClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이전 파일 제거
    setPreviewChannelImageUrl(null);
    setProfileImageFile(null);

    if (!e.target.files) return;
    const file = e.target.files?.[0];
    setProfileImageFile(file);

    // 파일 미리보기
    const fileUrl = URL.createObjectURL(file);
    setPreviewChannelImageUrl(fileUrl);
  };

  const handleAddTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (tagValue.trim() === '') {
        return console.log('태그를 입력하세요.');
      }
      if (tagValue.length > 10) {
        return console.log('태그는 10자 이내로 입력하세요.');
      }
      if (channelData.tags.length > 5) {
        return console.log('태그는 5개까지만 입력할 수 있습니다.');
      }
      if (channelData.tags.includes(tagValue)) {
        return console.log('이미 입력된 태그입니다.');
      }

      setChannelData({
        ...channelData,
        tags: [...channelData.tags, tagValue],
      });
      setTagValue('');
    }
  };

  const handleDeleteTag = (tag: string) => {
    setChannelData({
      ...channelData,
      tags: channelData.tags.filter((t) => t !== tag),
    });
  };

  const handleChangeChannelData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelData({
      ...channelData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeTagValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createChannel();
    closeModal();
    setChannelData({
      name: '',
      tags: [],
      description: '',
      image: '',
    });
  };

  const createChannel = async () => {
    const newChannel = new FormData();
    if (channelData) {
      newChannel.append('name', channelData.name);
      // FormData의 경우 배열을 받을 수 없기 때문에 JSON.stringify를 사용하여 문자열로 변환하여 전송
      // 이후 서버에서 JSON.parse를 통해 배열로 변환하고 사용
      newChannel.append('tags', JSON.stringify(channelData.tags));
      newChannel.append('description', channelData.description);
      newChannel.append('ownerId', user?.id || '');
    }
    if (profileImageFile) {
      newChannel.append('image', profileImageFile);
    }
    uploadCreateChannel.mutate({ channel: newChannel });
  };

  return {
    channelData,
    tagValue,
    previewChannelImageUrl,
    fileInputRef,
    handleChangeChannelData,
    handleChangeTagValue,
    handleChannelImageClick,
    handleFileChange,
    handleAddTagKeyDown,
    handleDeleteTag,
    handleSubmit,
    closeModal,
  };
}

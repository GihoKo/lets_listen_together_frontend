// hooks
import useGetChannelById from '@/apis/hooks/useGetChannelById';
import useUpdateChannel from '@/apis/hooks/useUpdateChannel';
import useModalStore from '@/store/useModalStore';
import { useUserStore } from '@/store/useUserStore';
import { useEffect, useRef, useState } from 'react';

// type
import { ErrorMessagesType, ModalType } from '@/types/enum';
import { checkIsChannelOwner } from '@/utils/checkIsChannelOwner';
import validateChannelData from '@/utils/validateChannelData';
import validateTag from '@/utils/validateTag';

export default function useEditChannelModal() {
  const { type, closeModal, props } = useModalStore();

  if (type !== ModalType.EDIT_CHANNEL) return null;

  const modalProps = props as { channelId: string; channelName: string; channelOwnerId: string };
  const { user } = useUserStore();
  const { data, isLoading, isError } = useGetChannelById(modalProps.channelId);
  const [channelData, setChannelData] = useState({
    name: '',
    tags: [] as string[],
    description: '',
    image: '',
  });
  const upLoadUpdateChannelMutation = useUpdateChannel();
  const [previewChannelImageUrl, setPreviewChannelImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
  const [tagValue, setTagValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

      if (
        !validateTag({
          tagValue,
          channelData,
          setErrorMessage,
        })
      ) {
        return;
      }

      setChannelData({
        ...channelData,
        tags: [...channelData.tags, tagValue],
      });
      setTagValue('');
    }
  };

  const handleAddTagButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (
      !validateTag({
        tagValue,
        channelData,
        setErrorMessage,
      })
    )
      return;

    setChannelData({
      ...channelData,
      tags: [...channelData.tags, tagValue],
    });
    setTagValue('');
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

    if (
      !validateChannelData({
        channelData,
        setErrorMessage,
      })
    ) {
      return;
    }

    if (
      checkIsChannelOwner({
        ownerId: modalProps.channelOwnerId,
      })
    ) {
      updateChannel();
      closeModal();
    } else {
      setErrorMessage(ErrorMessagesType.CHANNEL_EDIT_PERMISSION);
    }
  };

  const updateChannel = async () => {
    const updatedChannel = new FormData();
    if (channelData) {
      updatedChannel.append('name', channelData.name);
      // FormData의 경우 배열을 받을 수 없기 때문에 JSON.stringify를 사용하여 문자열로 변환하여 전송
      // 이후 서버에서 JSON.parse를 통해 배열로 변환하고 사용
      updatedChannel.append('tags', JSON.stringify(channelData.tags));
      updatedChannel.append('description', channelData.description);
      updatedChannel.append('ownerId', user?.id || '');
    }
    // 이미지 파일을 업로드한 경우
    if (profileImageFile) {
      updatedChannel.append('image', profileImageFile);
    } else {
      // 업로드 하지 않은 경우 기존 이미지 URL 전송
      updatedChannel.append('image', channelData.image);
    }
    upLoadUpdateChannelMutation.mutate({ channelId: modalProps.channelId, channel: updatedChannel });
  };

  useEffect(() => {
    if (data) {
      setChannelData({
        name: data.name,
        tags: data.tags,
        description: data.description,
        image: data.image,
      });
      setPreviewChannelImageUrl(data.image);
    }
  }, [data]);

  return {
    channelData,
    tagValue,
    previewChannelImageUrl,
    fileInputRef,
    modalProps,
    isLoading,
    isError,
    errorMessage,
    handleChannelImageClick,
    handleFileChange,
    handleChangeTagValue,
    handleDeleteTag,
    handleSubmit,
    handleAddTagKeyDown,
    handleAddTagButtonClick,
    handleChangeChannelData,
    closeModal,
  };
}

import Dimmed from '../../Atoms/Modal/Dimmed';
import Button from '../../Atoms/Modal/Button';
import { useRef, useState } from 'react';
import {
  Wrapper,
  Form,
  FormField,
  Input,
  Label,
  Title,
  Description,
  ButtonWrapper,
  TagContainer,
  Tag,
} from '../../Atoms/Modal/Main.style';
import { useUserStore } from '../../../store/useUserStore';
import useModalStore from '../../../store/useModalStore';
import { ModalType } from '../../../types/enum';
import styled from 'styled-components';
import useCreateChannel from '../../../../apis/hooks/useCreateChannel';

export default function CreateChannelModal() {
  const { type, closeModal } = useModalStore();

  if (type !== ModalType.CREATE_CHANNEL) return null;

  const { user } = useUserStore();
  const [channelData, setChannelData] = useState({
    name: '',
    tags: '',
    description: '',
    image: '',
  });
  const [tags, setTags] = useState<string[]>([]);
  const [previewChannelImageUrl, setPreviewChannelImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
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
      if (channelData.tags.trim() === '') {
        return console.log('태그를 입력하세요.');
      }
      if (channelData.tags.length > 10) {
        return console.log('태그는 10자 이내로 입력하세요.');
      }
      if (tags.length > 5) {
        return console.log('태그는 5개까지만 입력할 수 있습니다.');
      }
      if (tags.includes(channelData.tags)) {
        return console.log('이미 입력된 태그입니다.');
      }

      setTags([...tags, channelData.tags]);
      setChannelData({
        ...channelData,
        tags: '',
      });
    }
  };

  const handleDeleteTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleChangeChannelData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelData({
      ...channelData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createChannel();
    closeModal();
    setChannelData({
      name: '',
      tags: '',
      description: '',
      image: '',
    });
  };

  const createChannel = async () => {
    const newChannel = new FormData();
    if (channelData) {
      newChannel.append('name', channelData.name);
      newChannel.append('tags', channelData.tags);
      newChannel.append('description', channelData.description);
      newChannel.append('ownerId', user?.id || '');
    }
    if (profileImageFile) {
      newChannel.append('image', profileImageFile);
    }
    uploadCreateChannel.mutate({ channel: newChannel });
  };

  return (
    <Dimmed>
      <Wrapper>
        <Title>채널 생성</Title>
        <Description>나만의 채널을 생성해보세요!</Description>

        <Form onSubmit={handleSubmit}>
          <FormField>
            <ChannelImageLabel htmlFor='channelImage'>channelImage</ChannelImageLabel>
            <ChannelImageWrapper onClick={handleChannelImageClick}>
              {previewChannelImageUrl ? (
                <img src={previewChannelImageUrl} alt='프로필 이미지' />
              ) : (
                <EmptyImage>
                  채널 이미지
                  <br />
                  업로드
                </EmptyImage>
              )}
            </ChannelImageWrapper>
            <FileInput
              name='channelImage'
              type='file'
              onChange={handleFileChange}
              accept='image/*'
              ref={fileInputRef}
            />
          </FormField>

          <FormField>
            <Label htmlFor='name'>채널 이름</Label>
            <Input
              name='name'
              value={channelData.name}
              onChange={handleChangeChannelData}
              placeholder='채널 이름을 입력하세요.'
              type='text'
            />
          </FormField>

          <FormField>
            <Label htmlFor='tags'>태그</Label>
            <TagContainer>
              {tags.map((tag) => (
                <Tag
                  key={tag}
                  onClick={() => {
                    handleDeleteTag(tag);
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </TagContainer>
            <Input
              name='tags'
              value={channelData.tags}
              onChange={handleChangeChannelData}
              placeholder='태그를 입력하세요.'
              type='text'
              onKeyDown={handleAddTagKeyDown}
            />
          </FormField>

          <FormField>
            <Label htmlFor='description'>채널 설명</Label>
            <Input
              name='description'
              value={channelData.description}
              onChange={handleChangeChannelData}
              placeholder='채널 설명을 입력하세요.'
              type='text'
              maxLength={10}
            />
          </FormField>
          <ButtonWrapper>
            <Button variant='confirm' type='submit'>
              생성
            </Button>
            <Button variant='close' type='button' onClick={closeModal}>
              취소
            </Button>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    </Dimmed>
  );
}

const ChannelImageWrapper = styled.button`
  border-radius: 16px;
  width: 120px;
  height: 120px;

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

const EmptyImage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--grey-grey600);
  background-color: var(--grey-grey150);

  cursor: pointer;

  &:hover {
    background-color: var(--grey-grey200);
  }
`;

const ChannelImageLabel = styled(Label)``;

const FileInput = styled.input`
  display: none;
`;

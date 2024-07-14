// libraries
import styled from 'styled-components';

// hooks
import useCreateChannelModal from './CreateChannelModal.hook';

// components
import Dimmed from '../../Atoms/Modal/Dimmed';
import Button from '../../Atoms/Modal/Button';
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
} from '../../Atoms/Modal/StyledComponents';

export default function CreateChannelModal() {
  // logics
  const hookData = useCreateChannelModal();

  // useCreateChannelModal hook에서 null을 반환할 수 있으므로 null 체크
  if (!hookData) return null;

  const {
    channelData,
    tagValue,
    previewChannelImageUrl,
    fileInputRef,
    handleChannelImageClick,
    handleFileChange,
    handleChangeChannelData,
    handleChangeTagValue,
    handleAddTagKeyDown,
    handleDeleteTag,
    handleSubmit,
    closeModal,
  } = hookData;

  // view
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
              {channelData.tags.map((tag) => (
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
              value={tagValue}
              onChange={handleChangeTagValue}
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

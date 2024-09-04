// libraries

// hooks
import useEditChannelModal from './EditChannelModal.hook';

// components
import {
  AddTagButton,
  ButtonWrapper,
  ChannelImageLabel,
  ChannelImageWrapper,
  Description,
  EmptyImage,
  ErrorMessage,
  FileInput,
  Form,
  FormField,
  Input,
  Label,
  Tag,
  TagContainer,
  Title,
  Wrapper,
} from '@/components/Atoms/Modal/StyledComponents';
import Button from '@/components/Atoms/Modal/Button/Button';
import Dimmed from '@/components/Atoms/Modal/Dimmed';

export default function EditChannelModal() {
  // logics
  const logics = useEditChannelModal();

  if (!logics) return null;

  const {
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
  } = logics;

  // view
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <Dimmed>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title>채널 수정</Title>
          <Description>{`'${modalProps.channelName}' 채널 정보를 수정해보세요!`}</Description>

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
              value={channelData?.name}
              onChange={handleChangeChannelData}
              placeholder='채널 이름을 입력하세요.'
              type='text'
            />
          </FormField>

          <FormField>
            <Label htmlFor='tags'>태그</Label>
            <TagContainer>
              {channelData?.tags.map((tag) => (
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
            <AddTagButton onClick={handleAddTagButtonClick}>추가</AddTagButton>
          </FormField>

          <FormField>
            <Label htmlFor='description'>채널 설명</Label>
            <Input
              name='description'
              value={channelData?.description}
              onChange={handleChangeChannelData}
              placeholder='채널 설명을 입력하세요.'
              type='text'
              maxLength={50}
            />
          </FormField>

          {errorMessage === '' ? null : <ErrorMessage>{errorMessage}</ErrorMessage>}

          <ButtonWrapper>
            <Button variant='confirm' type='submit'>
              수정
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

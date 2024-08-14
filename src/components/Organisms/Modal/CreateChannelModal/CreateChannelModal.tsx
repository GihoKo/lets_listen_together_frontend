// hooks
import useCreateChannelModal from './CreateChannelModal.hook';

// components
import Dimmed from '../../../Atoms/Modal/Dimmed';
import Button from '../../../Atoms/Modal/Button/Button';
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
  ChannelImageLabel,
  ChannelImageWrapper,
  EmptyImage,
  FileInput,
  ErrorMessage,
} from '../../../Atoms/Modal/StyledComponents';

export default function CreateChannelModal() {
  // logics
  const logics = useCreateChannelModal();

  // useCreateChannelModal hook에서 null을 반환할 수 있으므로 null 체크
  if (!logics) return null;

  const {
    channelData,
    tagValue,
    previewChannelImageUrl,
    fileInputRef,
    errorMessage,
    handleChannelImageClick,
    handleFileChange,
    handleChangeChannelData,
    handleChangeTagValue,
    handleAddTagKeyDown,
    handleDeleteTag,
    handleSubmit,
    closeModal,
  } = logics;

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
              maxLength={50}
            />
          </FormField>

          {errorMessage === '' ? null : <ErrorMessage>{errorMessage}</ErrorMessage>}

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

// libraries
import styled from 'styled-components';

// hooks
import useChannelEditor from './ChannelEditor.hook';

// components
import {
  ButtonWrapper,
  Form,
  FormField,
  Input,
  Label,
  Tag,
  TagContainer,
} from '@/components/Atoms/Modal/StyledComponents';
import Button from '@/components/Atoms/Modal/Button';

// types
import { ChannelEditorProps } from './ChannelEditor.type';

export default function ChannelEditor({ EdittedChannel, setEdittedChannel }: ChannelEditorProps) {
  // logics
  const logics = useChannelEditor({ setEdittedChannel, EdittedChannel });

  if (!logics) return null;

  const {
    tagValue,
    handleChangeTagValue,
    handleDeleteTag,
    handleSubmit,
    handleAddTagKeyDown,
    handleChangeChannelData,
  } = logics;

  // view
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor='name'>채널 이름</Label>
          <Input
            name='name'
            value={EdittedChannel?.name}
            onChange={handleChangeChannelData}
            placeholder='채널 이름을 입력하세요.'
            type='text'
          />
        </FormField>

        <FormField>
          <Label htmlFor='tags'>태그</Label>
          <TagContainer>
            {EdittedChannel?.tags.map((tag) => (
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
            value={EdittedChannel?.description}
            onChange={handleChangeChannelData}
            placeholder='채널 설명을 입력하세요.'
            type='text'
            maxLength={10}
          />
        </FormField>

        <ButtonWrapper>
          <Button variant='confirm' type='submit'>
            적용
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

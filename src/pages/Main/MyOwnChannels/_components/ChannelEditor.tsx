import styled from 'styled-components';
import { Channel } from '../../../../types/channel';
import {
  ButtonWrapper,
  Form,
  FormField,
  Input,
  Label,
  Tag,
  TagContainer,
} from '../../../../components/Atoms/Modal/StyledComponents';
import Button from '../../../../components/Atoms/Modal/Button';
import { Dispatch, SetStateAction, useState } from 'react';
import useUpdateChannel from '../../../../apis/hooks/useUpdateChannel';

interface ChannelEditorProps {
  EdittedChannel: Channel | null;
  setEdittedChannel: Dispatch<SetStateAction<Channel | null>>;
}

export default function ChannelEditor({ EdittedChannel, setEdittedChannel }: ChannelEditorProps) {
  if (!EdittedChannel) return null;

  const upLoadUpdateChannelMutate = useUpdateChannel();
  const [tagValue, setTagValue] = useState<string>('');

  const handleChangeTagValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  };

  const handleDeleteTag = (tag: string) => {
    setEdittedChannel({
      ...EdittedChannel,
      tags: EdittedChannel.tags.filter((t) => t !== tag),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    upLoadUpdateChannelMutate.mutate({
      channelId: EdittedChannel.id,
      channel: EdittedChannel,
    });
  };

  const handleAddTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (
        tagValue === '' ||
        tagValue.length > 10 ||
        EdittedChannel?.tags.length > 5 ||
        EdittedChannel?.tags.includes(tagValue)
      )
        return;

      setEdittedChannel({
        ...EdittedChannel,
        tags: [...EdittedChannel.tags, tagValue],
      });
      setTagValue('');
    }
  };

  const handleChangeChannelData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdittedChannel({
      ...EdittedChannel,
      [e.target.name]: e.target.value,
    });
  };

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

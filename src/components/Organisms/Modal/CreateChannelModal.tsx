import Dimmed from '../../Atoms/Modal/Dimmed';
import Button from '../../Atoms/Modal/Button';
import { useState } from 'react';
import {
  Wrapper,
  Form,
  FormField,
  Input,
  Label,
  Title,
  Description,
  ButtonWrapper,
} from '../../Atoms/Modal/Main.style';
import { useUserStore } from '../../../store/useUserStore';
import { axiosInstance } from '../../../../apis/instances';
import useModalStore from '../../../store/useModalStore';
import { ModalType } from '../../../types/enum';
import styled from 'styled-components';

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

  const handleAddTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (channelData.tags === '') return;
    e.preventDefault();
    if (e.key === 'Enter') {
      setTags([...tags, channelData.tags]);
      setChannelData({
        ...channelData,
        tags: '',
      });
    }
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
    const channel = {
      name: channelData.name,
      tags: tags,
      description: channelData.description,
      image: '',
      ownerId: user?.id,
    };
    try {
      const response = await axiosInstance.post('/channels', {
        channel,
      });
      console.log(response.data);
      setChannelData({
        name: '',
        tags: '',
        description: '',
        image: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dimmed>
      <Wrapper>
        <Title>채널 생성</Title>
        <Description>나만의 채널을 생성해보세요!</Description>

        <Form onSubmit={handleSubmit}>
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
                <Tag key={tag}>{tag}</Tag>
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

const TagContainer = styled.div`
  display: flex;
  gap: 8px;

  overflow-x: hidden;
`;

const Tag = styled.div`
  border-radius: 8px;

  background-color: var(--mint7);
  padding: 8px;
  color: var(--grey-grey900);
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;

  margin-right: 8px;
`;

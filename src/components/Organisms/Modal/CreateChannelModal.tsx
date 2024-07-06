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
import useModalStore from '../../../../store/useModalStore';
import axios from 'axios';
import { useUserStore } from '../../../../store/useUserStore';

export default function CreateChannelModal() {
  const { isOpen, closeModal, modalType } = useModalStore();

  if (!isOpen || modalType !== 'CREATE_CHANNEL') return null;

  const { user } = useUserStore();
  console.log(user);

  const [channelData, setChannelData] = useState({
    name: '',
    tags: '',
    description: '',
    image: '',
  });

  const handleChangeChannelData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChannelData({
      ...channelData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Call API to create music
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
    console.log(user?.id);
    const channel = {
      name: channelData.name,
      tags: [`${channelData.tags}`],
      description: channelData.description,
      image: '',
      ownerId: user?.id,
    };
    try {
      const response = await axios.post('http://localhost:8080/api/channels', {
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
            <Input
              name='tags'
              value={channelData.tags}
              onChange={handleChangeChannelData}
              placeholder='태그를 입력하세요.'
              type='text'
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

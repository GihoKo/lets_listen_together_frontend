// libraries
import styled from 'styled-components';

// components
import ChannelItem from './_components/ChannelItem';
import MainTitle from '../../../components/Atoms/Text/MainTitle';
import Description from '@/components/Molecules/Description';

// hooks
import useEditChannels from './EditChannels.hook';

export default function EditChannels() {
  // logics
  const { channels, isLoading, isError } = useEditChannels();

  // view
  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error...</div>;
  }

  return (
    <Wrapper>
      <MainTitle>EditChannels</MainTitle>
      <Content>
        <Description title='Tip' text='채널 우측 버튼으로 수정, 삭제할 수 있습니다.' />
        <Container>
          <ContentTitle>List</ContentTitle>
          {channels?.map((channel) => <ChannelItem key={channel.id} channel={channel} />)}
        </Container>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 24px;

  @media (max-width: 992px) {
    padding: 16px;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 32px;

  margin-top: 32px;

  @media (max-width: 992px) {
    gap: 16px;
    flex-direction: column;

    margin-top: 16px;
  }
`;

const Container = styled.ul`
  flex-grow: 1;
  border-radius: 16px;
  border: 1px solid var(--grey-grey300);
  max-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 32px;

  background-color: var(--grey-grey150);

  @media (max-width: 992px) {
    width: 100%;
    max-width: none;

    padding: 16px;
  }
`;

const ContentTitle = styled.h2`
  font-size: 20px;

  margin-bottom: 8px;
`;

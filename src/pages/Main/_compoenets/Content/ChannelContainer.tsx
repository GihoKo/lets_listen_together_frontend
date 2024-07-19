// libraries
import styled from 'styled-components';

// hooks
import useChannelContainer from './ChannelContainer.hook';

// components
import ChannelItem from './ChannelItem';
import MainTitle from '@/components/Atoms/Text/MainTitle';

export default function ChannelContainer() {
  // logics
  const { channels, isLoading, isError } = useChannelContainer();

  // view
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <Wrapper>
      <MainTitle>Channel List</MainTitle>
      <Container>{channels?.map((channel) => <ChannelItem key={channel.id} channel={channel} />)}</Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 24px;

  @media (max-width: 1024px) {
    padding: 16px;
  }
`;

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  margin-top: 16px;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

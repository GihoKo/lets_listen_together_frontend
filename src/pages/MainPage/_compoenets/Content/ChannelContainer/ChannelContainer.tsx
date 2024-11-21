// libraries
import styled from 'styled-components';
import { lazy } from 'react';

// hooks
import useChannelContainer from './ChannelContainer.hook';

// components
import MainTitle from '@/components/Atoms/Text/MainTitle';
import { Spinner } from '@/components/Atoms/Spinner/ComponentSpinner';

const Channel = lazy(() => import('./Channel/Channel'));

// types
import { Music } from '@/types/music';

export default function ChannelContainer() {
  // logics
  const { channels, hasNextPage, currentMusic, InfinifeScrollTriggerRef } = useChannelContainer();

  // view
  return (
    <Wrapper>
      <MainTitle>Channel List</MainTitle>

      <Container $currentMusic={currentMusic}>
        {channels?.pages.map((page) => page.channels?.map((channel) => <Channel key={channel.id} channel={channel} />))}
      </Container>

      {hasNextPage ? (
        <InfiniteScrollTrigger ref={InfinifeScrollTriggerRef}>
          <Spinner />
        </InfiniteScrollTrigger>
      ) : null}
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

const Container = styled.ul<{
  $currentMusic: Music | null;
}>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  padding-bottom: ${(props) => (props.$currentMusic ? '128px' : '24px')};
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

const InfiniteScrollTrigger = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// libraries
import styled from 'styled-components';
import { lazy, Suspense } from 'react';

// components
import MainTitle from '../../components/Atoms/Text/MainTitle';
import Description from '@/components/Molecules/Description/Description';
import QueryErrorBoundary from '@/components/Molecules/QueryErrorBoundary/QueryErrorBoundary';
import PageFallBack from '@/components/Molecules/FallBack/PageFallBack';

const ChannelContainer = lazy(() => import('./_components/ChannelConteiner/ChannelContainer'));

export default function EditChannelPage() {
  // view
  return (
    <Wrapper>
      <MainTitle>EditChannels</MainTitle>
      <Content>
        <Description title='Tip' text='채널 우측 버튼으로 수정, 삭제할 수 있습니다.' />

        <QueryErrorBoundary>
          <Suspense fallback={<PageFallBack />}>
            <ChannelContainer />
          </Suspense>
        </QueryErrorBoundary>
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

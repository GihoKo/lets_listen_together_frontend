import PageFallBack from '@/components/Molecules/PageFallBack';
import QueryErrorBoundary from '@/components/Molecules/QueryErrorBoundary';
import { Suspense } from 'react';
import ChannelContainer from './ChannelContainer/ChannelContainer';

export default function Content() {
  return (
    <>
      <QueryErrorBoundary>
        <Suspense fallback={<PageFallBack />}>
          <ChannelContainer />
        </Suspense>
      </QueryErrorBoundary>
    </>
  );
}

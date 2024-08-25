// libraries
import { Suspense } from 'react';
// components
import ComponentFallBack from '@/components/Molecules/FallBack/ComponentFallBack';
import QueryErrorBoundary from '@/components/Molecules/QueryErrorBoundary/QueryErrorBoundary';
import ChannelContainer from './ChannelContainer/ChannelContainer';

export default function Content() {
  return (
    <>
      <QueryErrorBoundary>
        <Suspense fallback={<ComponentFallBack />}>
          <ChannelContainer />
        </Suspense>
      </QueryErrorBoundary>
    </>
  );
}

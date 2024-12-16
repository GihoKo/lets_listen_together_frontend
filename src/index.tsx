import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Query, QueryClient } from '@tanstack/react-query';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 에러 바운더리 사용시 필요한 옵션
      throwOnError: true,
    },
  },
});

// 로컬 스토리지 저장을 위한 설정
const persister = createSyncStoragePersister({
  storage: window.localStorage,
  key: 'react-query-persist-local-storage',
  throttleTime: 1000,
  serialize: (value) => JSON.stringify(value),
  deserialize: (value) => JSON.parse(value),
});

// 쿼리 저장 시간
const maxAge = 1 * 60 * 3000;

// 특정 쿼리 키의 값만 로컬스토리지에 저장
const storedQueryKeys = ['musicList', 'myOwnChannels', 'mySubscribedChannels'];

// dehydrate(저장) 옵션
const dehydrateOptions = {
  // 특정 쿼리 키값들만 저장한다.
  shouldDehydrateQuery: (query: Query) => {
    for (const storedQueryKey of storedQueryKeys) {
      if (query.queryKey.includes(storedQueryKey)) {
        return true;
      }
    }
    return false;
  },
};

const persistOptions = { persister, maxAge, dehydrateOptions };

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    // <React.StrictMode>
    <BrowserRouter>
      <PersistQueryClientProvider client={queryClient} persistOptions={persistOptions}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position='left' />
      </PersistQueryClientProvider>
    </BrowserRouter>,
    // </React.StrictMode>,
  );
}

serviceWorkerRegistration.register();

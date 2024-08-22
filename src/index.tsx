import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 에러 바운더리 사용시 필요한 옵션
      throwOnError: true,
    },
  },
});

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>,
  );
}

serviceWorkerRegistration.register();

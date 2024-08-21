import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import QueryErrorBoundary from './components/Molecules/QueryErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
          <QueryErrorBoundary>
            <App />
          </QueryErrorBoundary>
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>,
  );
}

serviceWorkerRegistration.register();

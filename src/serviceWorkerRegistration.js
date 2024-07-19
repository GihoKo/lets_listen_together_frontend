// 서비스 워커 등록 함수
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('../public/service-worker').then(
        (registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        },
        (error) => {
          console.log('ServiceWorker registration failed: ', error);
        },
      );
    });
  }
}

// 서비스 워커 등록 해제 함수
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}

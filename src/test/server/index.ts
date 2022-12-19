export const initMocks = () => {
  if (import.meta.env.VITE_API_MOCKING === 'true') {
    const isUndefined = typeof window === 'undefined';
    if (isUndefined) {
      // TODO: import 를 이용한 then 처리
      import('./server').then(({ server }) => {
        server.listen();
      });
    } else {
      import('./browser').then(({ worker }) => {
        worker.start();
      });
    }
  }
};

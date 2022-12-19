export const initMocks = () => {
  if (import.meta.env.VITE_API_MOCKING === 'true') {
    const isUndefined = typeof window === 'undefined';
    if (isUndefined) {
      // TODO: import 를 이용한 then 처리
      console.log('server');
      import('./server').then(({ server }) => {
        server.listen();
      });
    } else {
      console.log('browser');
      import('./browser').then(({ worker }) => {
        worker.start();
      });
    }
  }
};

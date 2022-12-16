import { server } from './server';
import { worker } from './browser';

export const initMocks = () => {
  if (import.meta.env.VITE_API_MOCKING === 'true') {
    if (typeof window === 'undefined') {
      console.log('1');
      server.listen();
    } else {
      console.log('2');
      worker.start();
    }
  } else {
    console.log('3');
  }
};

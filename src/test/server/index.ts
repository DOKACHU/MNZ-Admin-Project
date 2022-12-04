import { server } from './server';
import { worker } from './brower';

export const initMocks = () => {
  if (import.meta.env.VITE_API_MOCKING === 'true') {
    if (typeof window === 'undefined') {
      server.listen();
    } else {
      worker.start();
    }
  }
};

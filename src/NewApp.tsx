import { AppProvider } from './providers';
import { AppRoutes } from './routes';

export default function NewApp() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

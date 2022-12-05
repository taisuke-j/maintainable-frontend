import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { UserPage } from './pages';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserPage />
    </QueryClientProvider>
  );
}

export default App

import { Link, Route } from "wouter";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { UserPage } from './pages/users';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Link href="/users/1">
        <a className="link">Profile</a>
      </Link>
      <Route path="/users/:id" component={UserPage} />
    </QueryClientProvider>
  );
}

export default App

import { useGetUser } from '../hooks';
import { UserProfile } from '../components/user';

export const UserPage = () => {
  // TODO: ID should be passed from the route
  const user = useGetUser(1);

  return (
    <UserProfile {...user} />
  );
}
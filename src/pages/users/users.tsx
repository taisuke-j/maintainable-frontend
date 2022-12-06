import { useGetUser } from '../../hooks';
import { UserProfile } from '../../components/user';
import { container } from './styles.css';

export const UserPage = () => {
  // TODO: ID should be passed from the route
  const user = useGetUser(1);

  return (
    <div className={container}>
      <UserProfile {...user} />
    </div>
  );
}
import { User } from "../../../gen/orval/model/user";

export const UserProfile = (props: User) => {
  return (
    <>
      <h1>{props.firstName}</h1>
      <p>Email: {props.email}</p>
    </>
  );
}
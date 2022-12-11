import { render } from "@testing-library/react";

import { UserProfile } from "./UserProfile";
import { User } from "../../../gen/orval/model/user";

describe("Simple working test", () => {
  test("should render correctly", () => {
    const user: User = {
      id: 1,
      firstName: "Tom",
      lastName: "Smith",
      email: "tom@example.com",
      emailVerified: true,
    };

    const { container } = render(<UserProfile {...user} />);
    expect(container).toMatchSnapshot();
  });
});

import { getGetUserMock } from '../../gen/orval/default/default.msw';

// Add additional logics here if needed
// TODO: Currently just using the mock
export const useGetUser = (_userId: number) => getGetUserMock();
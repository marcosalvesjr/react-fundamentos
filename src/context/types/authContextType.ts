import type { UserType } from "./userType";

export type AuthType = {
  user: UserType | null;
  login: (id: string, user: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
};

import { githubUserInfo } from "@libs/states";

export interface navProps {
  title?: string;
  desc?: string;
}

export interface githubProps {
  data: typeof githubUserInfo;
  isLoading: boolean;
}

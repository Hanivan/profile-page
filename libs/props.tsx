import { githubUserInfo } from "@libs/states";

export interface navProps {
  title?: string;
  desc?: string;
}

export interface githubProps {
  data: typeof githubUserInfo;
  isLoading: boolean;
}

export interface linkButton {
  href: string;
  text: string;
  dark?: boolean;
}

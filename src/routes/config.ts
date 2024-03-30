import { ReactNode } from "react";

export type AdminModuleType = "dashboard" | "levels" | "topics" | "skills" | "questions" | "question-papers" | "create-question-paper" | "logout";
export type RouteType = {
  element?: ReactNode,
  state: AdminModuleType,
  index?: boolean,
  path: string,
  child?: RouteType[],
  sidebarProps?: {
    displayText: string,
    img: string | ReactNode;
  };
  children?: RouteType[] | null;
};

export type PermissionType = {
  id: number | string;
  is_show: boolean;
  module: AdminModuleType | string;
  submodules?: any;
  keys?: string[];
};

export type CommonPermissionType = {
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
  status?: boolean;
}

export type BussinesssPermissionType = CommonPermissionType & {
  login_as_client: boolean;
  re_verification: boolean;
}

export type CampaignPermissionType = {
  view: boolean;
  archive: boolean;
}

export type PressReleasePermissionType = CampaignPermissionType & {
  assign: boolean;
  edit_ai_content: boolean;
  send_for_approval: boolean;
  status: boolean;
  re_generate: boolean;
}

export type UserPermissionType = CommonPermissionType & {
  re_verification: boolean;
}
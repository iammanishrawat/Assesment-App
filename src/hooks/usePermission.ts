import { selectPermissions } from "redux/features/appStateSlice";
import { useTypedSelector } from "redux/store";
import { AdminModuleType, PermissionType } from "routes/config";
import { useMemo } from "react";

export const usePermissions = (type: AdminModuleType) => {
  const permissions = useTypedSelector(selectPermissions);
  return useMemo(() => (permissions?.length ? permissions?.find((permission: PermissionType) => permission.module === type) : {}), [permissions]);
}
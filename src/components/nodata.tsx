import { selectPermissionLoaded } from 'redux/features/appStateSlice';
import { useTypedSelector } from 'redux/store';

type NoDataProps = {
  message?: string;
  className?: string;
  isPermission?: boolean;
}

function NoDataComponent({
  message = "No record found!",
  isPermission = false,
  className = ''
}: NoDataProps) {
  const loaded = useTypedSelector(selectPermissionLoaded);
  return (
    <div className={`no-data-found ${className}`}>
      <span>{isPermission ? !!loaded ? "Unauthrized access" : "" : message}</span>
    </div>
  )
}

export default NoDataComponent;
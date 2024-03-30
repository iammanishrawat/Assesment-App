import { useMemo } from 'react';
import { selectCurrentToken, selectCurrentUser, selectIsLoaded, selectIsLoading } from 'redux/features/appStateSlice';
import { useTypedSelector } from 'redux/store';

export const useAuth = () => {
  const user = useTypedSelector(selectCurrentUser);
  return useMemo(() => ({ user }), [user]);
}

export const useToken = () => {
  const token = useTypedSelector(selectCurrentToken);
  return useMemo(() => ( token ), [token]);
}

export const useIsLoadingAuth = () => {
  const isLoading = useTypedSelector(selectIsLoading);
  return useMemo(() => (isLoading), [isLoading]);
}

export const useIsLoadedAuth = () => {
  const isLoaded = useTypedSelector(selectIsLoaded);
  return useMemo(() => (isLoaded), [isLoaded]);
}
  
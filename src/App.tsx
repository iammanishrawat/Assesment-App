import { useEffect } from 'react';
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import * as Sentry from "@sentry/react";
import { GlobalErrorBoundary, ScrollTop } from "components";
import { useAuth } from "hooks/useAuth";
import { useAppDispatch } from "redux/store";
import { getUserFromStore, updateWindowWidth } from "redux/features/appStateSlice";

function App() {
  const auth = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!auth.user) {
      dispatch(getUserFromStore({}));
    }
    const handleWindowResize = () => {
      dispatch(updateWindowWidth({width: window.innerWidth}));
    };
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Sentry.ErrorBoundary
      fallback={(errorData) => <GlobalErrorBoundary {...errorData} />}
    >
      <ScrollTop>
        <Routes />
        <ToastContainer />
      </ScrollTop>
    </Sentry.ErrorBoundary>
  )
}

export default App;

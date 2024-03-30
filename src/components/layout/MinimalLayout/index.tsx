import { getUser } from 'helpers/storage';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {
  let location = useLocation();
  const user = getUser();
  
  if (!user && !["/login", "/verify", "/press-release", "/redirect-to-dashboard", "/press-release-preview", "/event/apicon"].includes(location.pathname)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return(
    <>
      <Outlet />
    </>
  )
};

export default MinimalLayout;

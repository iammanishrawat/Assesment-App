import { Navigate, Outlet, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./styles.scss";
import Sidebar from "components/common/Sidebar";
import Topbar from "components/common/Topbar";
import { selectIsLoading, selectIsMobileView, selectIsShowSidebar, updateIsShowSidebar } from "redux/features/appStateSlice";
import { useAppDispatch, useTypedSelector } from "redux/store";
import { useAuth } from "hooks/useAuth";
import LoadingCard from "components/common/LoadingCard";

const MainLayout = () => {
  let location = useLocation();
  const isMobileView = useTypedSelector(selectIsMobileView);
  const isShowSidebar = useTypedSelector(selectIsShowSidebar);
  const auth = useAuth();
  const dispatch = useAppDispatch();
  const isLoading = useTypedSelector(selectIsLoading);

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const setSidebar = () => {
    dispatch(updateIsShowSidebar({show: false}));
  }

  if(isLoading) return (<LoadingCard />)
  
  return (
    <Container fluid className={"p-0 m-0"}>
      <section>
        <Sidebar />
        <div className={`main ${!isShowSidebar ? 'close' : ''}`}>
          <Topbar />
          <div >
            <Outlet />
          </div>
        </div>
        <div className={`${!isShowSidebar ? '' : 'overlay'}`}></div>
      </section>
    </Container>
  );
};

export default MainLayout;
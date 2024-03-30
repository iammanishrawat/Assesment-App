import { Link, useLocation, useNavigate } from 'react-router-dom';
import { closeIcon, downarrowIcon, uparrowIcon } from '../../assets';
import userRoutes from "routes/AppRoutes";
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'redux/store';
import { selectIsMobileView, selectIsShowSidebar, updateIsShowSidebar } from 'redux/features/appStateSlice';
import { RouteType } from 'routes/config';
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';

const Sidebar = () => {
  const {pathname} = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isShowSidebar = useTypedSelector(selectIsShowSidebar);
  const isMobileView = useTypedSelector(selectIsMobileView);
  const [openedIndex, setOpenedIndex] = useState<number[]>([]);
  
  const onClickNav = (route?: RouteType) => {
    isMobileView && setSidebar(!isShowSidebar);
    route && navigate(route.path);
  };

  const setSidebar = (show = false) => {
    dispatch(updateIsShowSidebar({show}));
  }

  const onClickOpenSubMenu = (index: number) => {
    let lastIndex: number[] = structuredClone(openedIndex);
    openedIndex?.includes(index) ? setOpenedIndex(openedIndex.filter(i => i !== index)) : setOpenedIndex([...new Set([...lastIndex, index])]);
  }

  const renderItem = (route: RouteType, index: number) => {
    return (
      <li className={pathname.includes(route.path) && !route?.children?.length ? 'activeMenu' : pathname.includes(route.path) && route?.children?.length ? 'activeSubMenu' : ''} onClick={() => route?.children?.length && onClickOpenSubMenu(index)}>
        <div onClick={() => !route?.children && onClickNav(route)}>
          {route.sidebarProps?.img}
          {route.sidebarProps?.displayText}
          {route?.children?.length && (
            <img src={openedIndex.includes(index) ? uparrowIcon : downarrowIcon} alt="arrow" className='arrow-shift' />
          )}
        </div>
      </li>
    )
  }

  return (
    <div className={`sidebar ${isShowSidebar ? 'open' : ''}`}>
    <span className="close-mob-icon" onClick={()=> onClickNav()}>
      <img src={closeIcon} alt="close" />
    </span>
      <div>
        <img src="https://vidya.orden.co.in/static/media/Orden-logo-white.ae7f352a46c3b47840f5.png" alt="logo" className='logo' />
      </div>
    <ul>
      {userRoutes?.map((route: RouteType, index: number) => {
        return (
          <>
            {renderItem(route, index)}
            <Transition
              as={Fragment}
              show={openedIndex.includes(index)}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
             <div className="h-full w-full">
             {route?.children?.map((childRoute: RouteType) => {
              return (
                renderItem(childRoute, index)
              )
            })}
             </div>
            </Transition>
          </>
        );
      })}
    </ul>
  </div>
  );
};

export default Sidebar;

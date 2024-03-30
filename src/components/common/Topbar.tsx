import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { bellIcon, burgermenuIcon, logoffIcon, passwordIcon, searchIcon } from '../../assets';
import './styles.scss';
import { userIcon } from '../../assets';
import { useTypedSelector } from 'redux/store';
import {
  selectIsMobileView,
  selectIsShowSidebar,
  updateIsShowSidebar,
} from 'redux/features/appStateSlice';
import { useDispatch } from 'react-redux';

const Topbar = ({ onMenuClick = () => null }) => {
  const isShowSidebar = useTypedSelector(selectIsShowSidebar);
  const isMobileView = useTypedSelector(selectIsMobileView);
  const dispatch = useDispatch();

  const setSidebar = (show = false) => {
    dispatch(updateIsShowSidebar({ show }));
  };
  return (
    <>
      <div className="container-fluid">
        <div className="topbar">
          {/* left area */}
          <div className="left-side">
            <span
              className="burger-menu sidebar-toggle"
              onClick={() => setSidebar(!isShowSidebar)}
            >
              <img src={burgermenuIcon} alt="menu" />
            </span>
            <p className="subject-name rounded-full">Maths</p>
            <div className="search-div">
              <span className="search-icon">
                <img src={searchIcon} alt="search" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search any keyword"
              />
            </div>
          </div>
          {/* left area */}

          {/* right area */}
          <div className="right-side">
            <span className="notification-menu">
              <img src={bellIcon} alt="bell" />
            </span>
            <span className="user-menu">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    <img src={userIcon} alt="user" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-[9999] mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? 'bg-orange-100 text-orange-700'
                                : 'text-gray-700'
                            } group flex gap-1 w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <img src={passwordIcon} alt="" />
                            Reset Password
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? 'bg-orange-100 text-orange-700'
                                : 'text-gray-700'
                            } group flex w-full gap-1 items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <img src={logoffIcon} alt="" />
                            Log Out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </span>
          </div>
          {/* right area */}
        </div>
      </div>
    </>
  );
};

export default Topbar;

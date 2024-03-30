import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollTopProps = {
  children: React.ReactNode
}

const ScrollTop = ({ children }: ScrollTopProps): any => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return children || <></>;
};

export default ScrollTop;

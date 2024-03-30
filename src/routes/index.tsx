import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import { useEffect, useState } from 'react';
import { useAuth } from 'hooks/useAuth';

export default function ThemeRoutes() {
  const [routes, setRoutes] = useState<any[]>([LoginRoutes]);
  const auth = useAuth();
  
  useEffect(()=> {
     (async () => {
       if(!!auth.user){
         setRoutes([MainRoutes, LoginRoutes]);
       }
     })();
  }, [auth.user]);
  
  return useRoutes(routes);
}
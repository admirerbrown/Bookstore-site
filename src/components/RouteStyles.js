import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useAppStyles = () => {
  const location = useLocation();
  const [appStyles, setAppStyles] = useState({
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#eeeeee93',
    padding: '50px',
  });

  useEffect(() => {
    if (location.pathname === '/categories') {
      setAppStyles({
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#eeeeee93',
        padding: '50px',
      });
    } else {
      setAppStyles({
        height: '',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#eeeeee93',
        padding: '50px',
      });
    }
  }, [location]);

  return appStyles;
};

export default useAppStyles;

import { useEffect, useState } from 'react';
import VideoLink from 'Pages/videoLink';
import VideoEditor from 'Pages/videoEditor';
import { ROUTES } from 'Constants';
import { MainComponent } from './styled';

const Router = () => {
  const [page, setPage] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setPage(path);
  };

  return (
    <MainComponent>
      {page === ROUTES.HOME && <VideoLink onButtonClick={navigateTo}/>}
      {page === ROUTES.EDITOR && <VideoEditor onButtonClick={navigateTo}/>}
    </MainComponent>
  );
};

export default Router;

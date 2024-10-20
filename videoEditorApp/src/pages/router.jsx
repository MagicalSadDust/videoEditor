import { useEffect, useState } from 'react';
import VideoLink from 'Components/videoLink';
import VideoEditor from 'Components/videoEditor';
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
      {page === ROUTES.home && <VideoLink onButtonClick={navigateTo}/>}
      {page === ROUTES.editor && <VideoEditor onButtonClick={navigateTo}/>}
    </MainComponent>
  );
};

export default Router;

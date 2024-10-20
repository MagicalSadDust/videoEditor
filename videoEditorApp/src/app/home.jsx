import { GlobalStyle, RootContainer } from './styled';
import Router from '../pages/router';

function Home() {
  return (
    <RootContainer>
      <GlobalStyle/>
      <Router />
    </RootContainer>
  )
}

export default Home;

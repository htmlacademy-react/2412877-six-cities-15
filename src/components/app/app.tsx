import MainPage from '../../pages/main-page';

type AppProps = {
  countItem : number;
}

function App ({countItem}: AppProps) {
  return (
    <MainPage countItem= { countItem } />
  );
}
export default App;

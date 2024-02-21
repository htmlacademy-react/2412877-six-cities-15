import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import OfferScreen from '../../pages/offer-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import NotFoundPage from '../../pages/not-found-page';


type AppProps = {
  rentOffersCount : number;
}

function App ({rentOffersCount}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route
        path={AppRoute.main}
        element={<MainPage rentOffersCount= { rentOffersCount } />}
        />
       <Route
        path={AppRoute.favorite}
        element={
          <PrivateRoute
          authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <FavoritesPage />
          </PrivateRoute>
        }
        />
       <Route
        path={AppRoute.login}
        element={<LoginPage />}
        />
        <Route
        path={AppRoute.offer}
        element={<OfferScreen />}
        />
        <Route
        path='*'
        element={<NotFoundPage />}
        />
      </Routes>

    </BrowserRouter>
    </HelmetProvider>
  );
}
export default App;

//<MainPage rentOffersCount= { rentOffersCount } />

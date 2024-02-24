import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page';
import { AppRoutes, AuthorizationStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import OfferScreen from '../../pages/offer-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import NotFoundPage from '../../pages/not-found-page';
import { OFFER_CARD } from '../mock/offer-card';


type AppProps = {
  rentOffersCount : number;
}

function App ({rentOffersCount}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoutes.main}
            element={<MainPage rentOffersCount= { rentOffersCount } />}
          />
          <Route
            path={AppRoutes.favorite}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoutes.login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoutes.offer}
            element={<OfferScreen offerInfo={OFFER_CARD} />}
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

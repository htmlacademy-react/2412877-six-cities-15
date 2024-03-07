import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page';
import { AppRoutes, AuthorizationStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import OfferScreen from '../../pages/offer-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Layout from '../layout/layout';
import { TCard } from '../mock/types';


type AppProps = {
  rentOffersCount : number;
  cards: TCard[];
}

function App ({rentOffersCount, cards}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<Layout />}>

            <Route index element={<MainPage rentOffersCount= { rentOffersCount } cards={cards} />} />

            <Route
              path={AppRoutes.Favorites}
              element={
                <PrivateRoute
                  authorizationStatus={AuthorizationStatus.Auth}
                >
                  <FavoritesPage cards={cards} />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoutes.Login}
              element={<LoginPage />}
            />
            <Route
              path={AppRoutes.Offer}
              element={<OfferScreen cards={cards} />}
            />
          </Route>
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


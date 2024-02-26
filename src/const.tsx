export const Setting = {

  rentOffersCount : 312 ,
};

export const CITIES = ['Paris', 'Cologne', 'Amsterdam', 'Brussels', 'Hamburg', 'Dusseldorf'] as const;

export const OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

export const RatingNames : {[index: string]: string} = {

  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
};

export const AppRoutes = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;

export enum AuthorizationStatus {

  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}



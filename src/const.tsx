export const Setting = {

  countItem : 312 ,
};

export const Cities = ['Paris', 'Cologne', 'Amsterdam', 'Brusseles', 'Hamburg', 'Dusseldorf'] as const;

export const Options = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

export const RatingNames : {[index: string]: string} = {

  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
};

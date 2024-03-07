import CardList from '../components/cards-list/cards-list';
import CitiesList from '../cities-list/cities-list';
import SortOptions from '../components/sort-options/sort-options';
import Map from '../components/map/map';

type MainPageProps = {
  rentOffersCount: number;
}


function MainPage ({rentOffersCount}: MainPageProps) {
  return (

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{rentOffersCount} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              < SortOptions />
            </form>
            <CardList />
          </section>
          <div className="cities__right-section">
            < Map />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;

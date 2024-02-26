import { AppRoutes, CITIES } from '../const';
import { Link } from 'react-router-dom';


type CityItemProps = {

  city: typeof CITIES[number];
}


function CityItem ({city}: CityItemProps): JSX.Element {

  return (

    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to={AppRoutes.login}>
        <span>{city}</span>
      </Link>
    </li>
  );
}
function CitiesList (): JSX.Element {

  return (

    <ul className="locations__list tabs__list">
      {CITIES .map ((city) => <CityItem city={city} key={city}/>)}
    </ul>
  );
}

export default CitiesList;

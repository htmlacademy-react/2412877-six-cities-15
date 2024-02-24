import Card from './Card';
import { cards } from '../components/mock/mock-cards';

function CardList (): JSX.Element {

  return (

    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => <Card card={card} key={card.id} />)}
    </div>
  );
}

export default CardList;

import Card from "./card";
import { Cards } from "../components/mock/cards";

function CardList (): JSX.Element {

  return (

    <div className="cities__places-list places__list tabs__content">
      {Cards.map((card) => <Card card={card} key={card.id} />)}
    </div>
  );
}

export default CardList;

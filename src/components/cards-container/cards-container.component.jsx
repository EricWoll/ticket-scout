import Card from './card/card.component';

import { CardsContainer_div } from './cards-container.styles';

function CardsContainer({ cards }) {
    if (cards == null || cards.length == 0) {
        return;
    }

    return (
        <CardsContainer_div>
            {Array.isArray(cards)
                ? cards.map((card) => <Card key={card.id} cardItem={card} />)
                : cards._embedded.events.map((card) => (
                      <Card key={card.id} cardItem={card} />
                  ))}
        </CardsContainer_div>
    );
}

export default CardsContainer;

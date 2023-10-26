import { CardsContainer_div } from './cards-container.styles';

import Card from './card/card.component';

function CardsContainer({ CardItems }) {
    return (
        <CardsContainer_div>
            {CardItems._embedded.events.map((card) => {
                <Card cardItem={card} />;
            })}
        </CardsContainer_div>
    );
}

export default CardsContainer;

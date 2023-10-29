import { useContext, useEffect, useState } from 'react';

import Card from './card/card.component';
import { RetrivedEventsContext } from '../../contexts/retrieved-events.context';

import { CardsContainer_div } from './cards-container.styles';

function CardsContainer() {
    const { currentEvents } = useContext(RetrivedEventsContext);

    if (currentEvents == null) {
        return;
    }

    return (
        <CardsContainer_div>
            {currentEvents._embedded.events.map((card) => (
                <Card key={card.id} cardItem={card} />
            ))}
        </CardsContainer_div>
    );
}

export default CardsContainer;

import Card from './card/card.component';

function CardsContainer({ cards }) {
    if (cards == null || cards.length == 0) {
        return;
    }

    return (
        <div className="cards-container">
            {Array.isArray(cards)
                ? cards.map((card) => <Card key={card.id} cardItem={card} />)
                : cards._embedded.events.map((card) => (
                      <Card key={card.id} cardItem={card} />
                  ))}
        </div>
    );
}

export default CardsContainer;

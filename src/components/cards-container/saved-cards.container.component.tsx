import Card from "./card/card.component";

export default function SavedCardsContainer({
	cards,
}: {
	cards: Array<EventCard>;
}) {
	if (cards === null || cards.length == 0) {
		return;
	}

	return (
		<div className="cards-container">
			{cards.map((card: EventCard) => (
				<Card key={card.id} cardItem={card} />
			))}
		</div>
	);
}

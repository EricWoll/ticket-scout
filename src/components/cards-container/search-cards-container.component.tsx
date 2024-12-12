import Card from "./card/card.component";

export default function SearchCardsContainer({
	cards,
}: {
	cards: EventSearch;
}) {
	if (cards === null || cards._embedded.events.length == 0) {
		return;
	}

	return (
		<div className="m-3">
			{cards._embedded.events.map((card: EventCard) => (
				<Card key={card.id} cardItem={card} />
			))}
		</div>
	);
}

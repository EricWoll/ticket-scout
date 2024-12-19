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
		<div className="m-3 grid gap-4 grid-cols-[repeat(auto-fill,18rem)] justify-center">
			{cards.map((card: EventCard) => (
				<Card key={card.id} cardItem={card} />
			))}
		</div>
	);
}

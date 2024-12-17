import { Link, useSearchParams } from "react-router-dom";
import Images from "../../components/image/images";
import { useCallback, useContext, useEffect, useState } from "react";
import { getEventInfo } from "../../utils/Discovery.utils";
import { SavedEventsContext } from "../../contexts/saved-events.context";

import SavedHeart from "../../svg/icon-filled-heart.svg?react";
import UnSavedHeart from "../../svg/icon-unfilled-heart.svg?react";

export default function EventPage() {
	const [Search] = useSearchParams();
	const cardId = Search.get("card_id");
	const [cardInfo, setCardInfo] = useState<EventCard | null>(null);
	const [pageLoading, setPageLoading] = useState<boolean>(true);
	const [savedEvent, setSavedEvent] = useState<boolean>(false);

	const { addSavedEvent, removeSavedEvent, eventIsSaved } =
		useContext(SavedEventsContext);

	const addEventHandler = useCallback(() => {
		if (cardInfo) {
			addSavedEvent(cardInfo);
			setSavedEvent(true);
		}
	}, [cardInfo]);

	const removeEventHandler = useCallback(() => {
		if (cardInfo) {
			removeSavedEvent(cardInfo);
			setSavedEvent(false);
		}
	}, [cardInfo]);

	useEffect(() => {
		if (cardInfo) {
			setSavedEvent(eventIsSaved(cardInfo));
		}
	}, [cardInfo]);

	useEffect(() => {
		const getData = async () => {
			setPageLoading(true);
			if (cardId) {
				setCardInfo(await getEventInfo(cardId));
			}
			setPageLoading(false);
		};
		getData();
		console.log(cardInfo);
	}, [cardId]);

	if (!cardInfo || pageLoading) {
		return <div>Loading Event...</div>;
	}

	return (
		<div className="m-4">
			<section className="flex flex-wrap gap-4">
				<Images
					images={cardInfo.images}
					ratio="16_9"
					width={1024}
					className="rounded-md max-w-96 min-w-20"
				/>
				<section className="flex flex-nowrap gap-2 items-center h-fit">
					{savedEvent ? (
						<SavedHeart
							className="select-none cursor-pointer"
							onClick={removeEventHandler}
						/>
					) : (
						<UnSavedHeart
							className="select-none cursor-pointer"
							onClick={addEventHandler}
						/>
					)}
					<h2 className="text-2xl font-bold">{cardInfo.name}</h2>
				</section>
			</section>

			{/*
                        Look at Console Logs to see what you want to add!
            */}

			<Link to={cardInfo.url} target="_blank">
				Book Tickets
			</Link>
		</div>
	);
}

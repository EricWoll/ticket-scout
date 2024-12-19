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
				console.log(cardInfo);
			}
			setPageLoading(false);
		};
		getData();
	}, [cardId]);

	if (!cardInfo || pageLoading) {
		return <div>Loading Event...</div>;
	}

	const date = new Date(cardInfo.dates.start.dateTime);

	return (
		<main className="m-4 grid justify-center">
			<section className="flex items-start my-4 flex-wrap justify-center gap-2">
				<div className="p-2 bg-white shadow-main_inset rounded-md max-w-md min-w-20">
					<Images
						images={cardInfo.images}
						ratio="16_9"
						width={1024}
						className="rounded-md"
					/>
				</div>
				<section className="flex flex-col gap-2 flex-grow jus">
					<section className="flex items-center gap-2">
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
					<section className="shadow-main_inset rounded-md bg-white p-2 flex flex-col gap-1 w-full">
						<p>
							Event Type:{" "}
							{cardInfo.classifications[0].subGenre.name}{" "}
							{cardInfo.classifications[0].genre.name}
						</p>
						{cardInfo.ageRestrictions?.legalAgeEnforced && (
							<p>
								Age Restrictions:
								{cardInfo.ageRestrictions.legalAgeEnforced
									? " Must be of Leagal Age"
									: " None"}
							</p>
						)}
						<p>
							Event Date:{" "}
							{date.toLocaleString("en-us", {
								month: "short",
								day: "numeric",
								year: "numeric",
							})}
						</p>
						<p>
							Event Time:{" "}
							{date.toLocaleString("en-us", {
								timeZone: cardInfo.dates.timezone,
								hour: "2-digit",
								minute: "2-digit",
							})}
						</p>
						{cardInfo.priceRanges?.length > 0 && (
							<p>
								Price Range ({cardInfo.priceRanges[0].currency}
								): ${cardInfo.priceRanges[0].min}
								{" - "}${cardInfo.priceRanges[0].max}
							</p>
						)}
					</section>
				</section>
			</section>
			{cardInfo.sales.presales && (
				<section className="bg-white shadow-main p-2 grid gap-2 my-4 rounded-md">
					<h2 className="text-2xl">Presale Information</h2>
					{cardInfo.sales.presales.length > 0 && (
						<div className="shadow-main_inset flex flex-col p-2 rounded-md">
							{cardInfo.sales.presales.map((preSale, index) => {
								return (
									<div key={index} className="">
										<p>
											Start:{" "}
											{new Date(
												preSale.startDateTime
											).toLocaleString("en-us", {
												month: "short",
												day: "numeric",
												year: "numeric",
												timeZone:
													cardInfo.dates.timezone,
												hour: "2-digit",
												minute: "2-digit",
											})}
										</p>
										<p>
											End:{" "}
											{new Date(
												preSale.endDateTime
											).toLocaleString("en-us", {
												month: "short",
												day: "numeric",
												year: "numeric",
												timeZone:
													cardInfo.dates.timezone,
												hour: "2-digit",
												minute: "2-digit",
											})}
										</p>
										{index !=
											cardInfo.sales.presales.length -
												1 && (
											<hr className="h-1 border-0 rounded-md bg-gray-200 my-1" />
										)}
									</div>
								);
							})}
						</div>
					)}
				</section>
			)}
			<section className="bg-white shadow-main p-2 grid gap-2 my-4 rounded-md">
				<p className="text-2xl">Public Sales</p>
				<div className="shadow-main_inset flex flex-col gap-1 p-2 rounded-md">
					<div className="flex flex-wrap gap-12">
						<p>
							Start:{" "}
							{new Date(
								cardInfo.sales.public.startDateTime
							).toLocaleString("en-us", {
								timeZone: cardInfo.dates.timezone,
								hour: "2-digit",
								minute: "2-digit",
							})}
						</p>
						<p>
							End:{" "}
							{new Date(
								cardInfo.sales.public.endDateTime
							).toLocaleString("en-us", {
								timeZone: cardInfo.dates.timezone,
								hour: "2-digit",
								minute: "2-digit",
							})}
						</p>
					</div>
					{cardInfo.ticketLimit?.info && (
						<p>Ticket Limit: {cardInfo.ticketLimit.info}</p>
					)}
				</div>
			</section>
			<Link
				to={cardInfo.url}
				target="_blank"
				className="w-full flex flex-row self-stretch gap-1 justify-center px-10 py-2 rounded-md bg-Medium_slate_blue text-white max-w-56 mx-auto"
			>
				Book Tickets
			</Link>
		</main>
	);
}

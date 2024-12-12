interface EventCard {
	_embedded: {
		venues: Array<TicketMasterVenue>;
		attractions: Array<TicketMasterAttraction>;
	};
	_links: {
		self: {
			href: string;
		};
		attractions: Array<{
			href: string;
		}>;
		venues: Array<{
			href: string;
		}>;
	};
	classifications: Array<TicketMasterClassification>;
	dates: {
		start: {
			localDate: string;
			localTime: string;
			dateTime: string;
			dateTBD: boolean;
			dateTBA: boolean;
			timeTBA: boolean;
			noSpecificTime: boolean;
		};
		timezone: string;
		status: {
			code: string;
		};
	};
	id: string;
	images: Array<TicketMasterImage>;
	locale: string;
	name: string;
	pleaseNote: string;
	priceRanges: Array<{
		type: string;
		currency: string;
		min: number;
		max: number;
	}>;
	promoter: {
		id: string;
	};
	sales: {
		public: {
			startDateTime: string;
			startTBD: boolean;
			endDateTime: string;
		};
	};
	test: boolean;
	type: string;
	url: string;
}

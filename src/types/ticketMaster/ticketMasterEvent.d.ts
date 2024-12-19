interface TicketMasterEvent {
	name: string;
	type: string;
	id: string;
	test: boolean;
	url: string;
	locale: string;
	images: Array<TicketMasterImage>;
	sales: {
		public: {
			startDateTime: string;
			startTBD: boolean;
			endDateTime: string;
		};
	};
	dates: {
		start: {
			localDate: string;
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
	classifications: Array<TicketMasterClassification>;
	promoter: {
		id: string;
	};
	_links: {
		self: TicketMasterLink;
		attractions: Array<TicketMasterLink>;
		venues: Array<TicketMasterLink>;
	};
	_embedded: {
		venues: Array<TicketMasterVenue>;
		attractions: Array<TicketMasterAttraction>;
	};
}

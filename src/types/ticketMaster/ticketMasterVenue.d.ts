interface TicketMasterVenue {
	name: string;
	type: string;
	id: string;
	test: boolean;
	url: string;
	locale: string;
	postalCode: string;
	timezone: string;
	city: {
		name: string;
	};
	state: {
		name: string;
		stateCode: string;
	};
	country: {
		name: string;
		countryCode: string;
	};
	address: {
		line1: string;
	};
	location: {
		longitude: string;
		latitude: string;
	};
	markets: Array<{
		id: string;
	}>;
	dmas: Array<{
		id: number;
	}>;
	_links: {
		self: TicketMasterLink;
	};
}

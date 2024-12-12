interface TicketMasterAttraction {
	name: string;
	type: string;
	id: string;
	test: boolean;
	url: string;
	locale: string;
	images: Array<TicketMasterImage>;
	classifications: Array<TicketMasterClassification>;
	_links: {
		self: TicketMasterLink;
	};
}

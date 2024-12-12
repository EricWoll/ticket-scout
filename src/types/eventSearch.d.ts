interface EventSearch {
	_links: {
		self: {
			href: string;
			templated: true;
		};
		next: {
			href: string;
			templated: true;
		};
	};
	_embedded: {
		events: Array<EventCard>;
	};
	page: TicketMasterPage;
}

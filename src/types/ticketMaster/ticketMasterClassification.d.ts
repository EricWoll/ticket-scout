interface TicketMasterClassification {
	primary: boolean;
	segment: {
		id: string;
		name: string;
	};
	genre: {
		id: string;
		name: string;
	};
	subGenre: {
		id: string;
		name: string;
	};
}

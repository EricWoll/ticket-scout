const baseURL: string = import.meta.env.VITE_DISCOVERY_URL;
const apiKey: string = import.meta.env.VITE_DISCOVERY_API;

export default async function getData(
	country: string,
	search: string[] = [],
	pageNum: number = 0
): Promise<EventSearch> {
	const params = new URLSearchParams();

	if (country) params.append("countryCode", country);
	if (search.length > 0) params.append("keyword", search.join("+"));
	if (pageNum > 0) params.append("page", pageNum.toString());
	params.append("size", "20");
	params.append("apikey", apiKey);

	try {
		const response = await fetch(
			`${baseURL}events.json?${params.toString()}`
		);
		return await convertToJson(response);
	} catch (error: any) {
		throw new Error(`Failed to fetch data: ${error.message}`);
	}
}

export async function getEventInfo(eventId: string) {
	const params = new URLSearchParams();
	params.append("apikey", apiKey);
	try {
		const response = await fetch(
			`${baseURL}events/${eventId}.json?${params.toString()}`
		);
		return await convertToJson(response);
	} catch (error: any) {
		throw new Error(`Failed to fetch data: ${error.message}`);
	}
}

async function convertToJson(res: Response): Promise<any> {
	const resJson = await res.json();
	if (res.ok) {
		return resJson;
	} else {
		throw { name: "servicesError", message: resJson };
	}
}

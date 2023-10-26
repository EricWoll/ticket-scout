const baseURL = import.meta.env.VITE_DISCOVERY_URL;
const apiKey = import.meta.env.VITE_DISCOVERY_API;

export default class ExternalServices {
    async getData(country, search, pageNum = 0) {
        const countryCode = country ? '' : `countryCode=${country}&`;
        const searching =
            !search || search == []
                ? ''
                : `keyword=${search == [] ? search.join('+') : search}&`;
        const page = pageNum === 0 ? '' : `page=${pageNum}&`;

        const response = await fetch(
            baseURL +
                `events.json?` +
                countryCode +
                page +
                searching +
                `apikey=${apiKey}`
        );
        const data = await convertToJson(response);
        return data;
    }
}

function convertToJson(res) {
    const resJson = res.json();
    if (res.ok) {
        return resJson;
    } else {
        throw { name: 'servicesError', message: resJson };
    }
}

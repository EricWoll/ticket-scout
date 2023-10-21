const baseURL = import.meta.env.VITE_DISCOVERY_URL;
const apiKey = import.meta.env.VITE_DISCOVERY_API;

export default class ExternalServices {
    constructor() {}

    async getData(country, category, search) {
        const countryCode = country ? '' : `&countryCode=${country}`;
        const searching =
            search || search == [] ? '' : `keyword=${search.join('&')}`;

        const response = await fetch(
            baseURL +
                `${category}.json?` +
                countryCode +
                searching +
                `apikey=${apiKey}`
        );
        const data = await convertToJson(response);

        console.log(data);
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

const baseURL = import.meta.env.VITE_DISCOVERY_URL;
const apiKey = import.meta.env.VITE_DISCOVERY_API;

export default async function getData(country, search, pageNum = 0) {
    const countryCode = country ? '' : `countryCode=${country}&`;
    const searching =
        !search || search == []
            ? ''
            : `keyword=${search == [] ? search.join('+') : search}&`;
    const page = pageNum === 0 ? '' : `page=${pageNum}&`;

    return await fetch(
        baseURL +
            `events.json?` +
            countryCode +
            page +
            searching +
            'size=20&' +
            `apikey=${apiKey}`
    ).then((res) => convertToJson(res));
}

async function convertToJson(res) {
    const resJson = await res.json();
    if (res.ok) {
        return resJson;
    } else {
        throw { name: 'servicesError', message: resJson };
    }
}

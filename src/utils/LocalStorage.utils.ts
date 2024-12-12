export function getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || '');
}

export function setArrLocalStorage(key: string, data:any, clear = false) {
    const localData = getLocalStorage(key);
    if (clear) {
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        localStorage.setItem(
            key,
            JSON.stringify(
                Array.isArray(localData) ? [...localData, data] : [data]
            )
        );
    }
}

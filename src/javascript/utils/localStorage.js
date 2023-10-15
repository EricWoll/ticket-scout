export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function setArrLocalStorage(key, data) {
    const localData = getLocalStorage(key);
    localStorage.setItem(key, JSON.stringify(Array.isArray(localData) ? [... localData, data] : [data]));
}
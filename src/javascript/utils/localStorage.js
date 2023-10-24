export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function toggleLocalStorage(key, data) {
    let items = JSON.parse(localStorage.getItem(key));

    if (!Array.isArray(items)) {
        items = [];
    }

    const foundCard = items.some((item) => {
        return item.id === data.id;
    });

    const newItems = items.filter((item) => {
        return !item.id.includes(data.id);
    });

    if (!foundCard) {
        newItems.push({ ...data, isSaved: true });
    }

    setArrLocalStorage(key, newItems, true);
}

export function setArrLocalStorage(key, data, clear = false) {
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

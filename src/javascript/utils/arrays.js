export function isListEmpty(list) {
    return Object.is(list, null) || list.length === 0;
}
import { eventCard } from "./event-card-data";

export default class EventCardList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
        this.topList = [];
    }
}
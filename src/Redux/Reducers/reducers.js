import { FETCH_DATA, TAB_SELECTED, UPDATE_FILTERS_FOR_DATA } from "../Actions/actions"
const filtersFromStorage = JSON.parse(sessionStorage.getItem('filterForData'));

export function data(state = [], { type, payload }) {
    switch (type) {
        case FETCH_DATA:
            return payload;
        default:
            return state
    }
}


const initialFilters = {
    date: (!!filtersFromStorage) ? filtersFromStorage.date : 'today',
    typePayment: (!!filtersFromStorage) ? filtersFromStorage.typePayment : {
        datafono: false,
        link: false,
        todos: false
    },
}
export function filters(state = initialFilters, { type, payload }) {
    switch (type) {
        case UPDATE_FILTERS_FOR_DATA:
            const filters = { ...state, ...payload };
            sessionStorage.setItem('filterForData', JSON.stringify(filters));
            return filters;
        default:
            return state;
    }
}


const initialTabSelected = (!!filtersFromStorage) ? filtersFromStorage.date : 'today';
export function tabSelected(state = initialTabSelected, { type, payload }) {
    switch (type) {
        case TAB_SELECTED:
            return payload;
        default:
            return state
    }
}
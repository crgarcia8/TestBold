import jsonData from '../../Assets/Data.json';

export const FETCH_DATA = 'FETCH_DATA'
export const TAB_SELECTED = 'TAB_SELECTED'
export const UPDATE_FILTERS_FOR_DATA = 'UPDATE_FILTERS_FOR_DATA'

export const recieveData = (value) => ({
    type: FETCH_DATA,
    payload: value
})
export const recieveTabFilter = (value) => ({
    type: TAB_SELECTED,
    payload: value
})
export const updateFilters = (value) => ({
    type: UPDATE_FILTERS_FOR_DATA,
    payload: value
})

export const getData = () => dispatch => {
    /**
     * TODO: Fetch data from Database, for this example data is loaded from a Json file
     */
    return dispatch(recieveData(jsonData));
}
export const setTabFilter = (value) => dispatch => {
    return dispatch(recieveTabFilter(value))
}
export const addFilter = (value) => dispatch => {
    return dispatch(updateFilters(value))
}

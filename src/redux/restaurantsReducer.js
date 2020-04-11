import { API } from '../api/api';

const SET_RESTAURANTS = 'SET_RESTAURANTS';
const FILTER_RESTAURANTS = 'FILTER_RESTAURANTS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_CITY = 'SET_CITY';
const CHANGE_CAPACITY = 'SET_CAPACITY';

const initialState = {
    data: [],
    filteredRestaurants: [],
    isFiltered: false,
    selectedCity: '',
    selectedCapacity: 0,
    pageSize: 4,
    currentPage: 1,
}

const restaurantsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_RESTAURANTS:
            return {
                ...state,
                data: action.restaurants
            }
        case FILTER_RESTAURANTS:
            return {
                ...state,
                filteredRestaurants: state.data.filter(r => (
                    r.fields.city === action.city
                        && r.fields.capacity >= action.capacity
                )),
                isFiltered: true
            }
        case CHANGE_CITY:
            return {
                ...state,
                selectedCity: action.city
            }
        case CHANGE_CAPACITY:
            return {
                ...state,
                selectedCapacity: action.capacity
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state;
    }
}

export const setRestaurants = restaurants => ({ type: SET_RESTAURANTS, restaurants });
export const filterRestaurants = (city, capacity) => ({ type: FILTER_RESTAURANTS, city, capacity });
export const changeCity = city => ({ type: CHANGE_CITY, city });
export const changeCapacity = capacity => ({ type: CHANGE_CAPACITY, capacity });
export const changePage = page => ({ type: CHANGE_PAGE, page });

export const getRestaurants = () => async dispatch => {
    await API.getRestaurants().then(response => {
        dispatch(setRestaurants(response.items));
    })
}

export default restaurantsReducer;
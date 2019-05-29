import {combineReducers } from 'redux';
import animals_reducer from './animalsReducer';
import selected_reducer from './selectedReducer';
import doctors_reducer from './doctorReducers/doctorsReducer';

export default combineReducers({
    animals_reducer: animals_reducer,
    selected_reducer: selected_reducer,
    doctors_reducer: doctors_reducer
})
import { RECEIVE_ANIMALS } from '../actions/actions';
import { NEW_ANIMAL_SUCCESS } from '../actions/actions';
import { DELETE_ANIMAL_SUCCESS } from '../actions/actions';


const initialState = {
    animals: [],
    newAnimal: {},
    selectedAnimal: {}
}

const animal_reducer = (state=initialState, {type, animals}) => {
    switch(type){
        case RECEIVE_ANIMALS:
            return {
                ...state,
                animals: animals
            };
        case NEW_ANIMAL_SUCCESS:
            return {
                ...state,
                newAnimal: animals
            };
        case DELETE_ANIMAL_SUCCESS:
                return { animals: state.animals.filter(a =>
                    a.id !== animals
                 )};
        default:
            return state;
        }
    }


export default animal_reducer;
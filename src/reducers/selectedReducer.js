
import { SELECT_ANIMAL_SUCCESS } from '../actions/actions';


const initialState = {
    selectedAnimal: {}
}

const selected_reducer = (state = initialState, {type, animals}) => {
    switch(type){
        case SELECT_ANIMAL_SUCCESS:
            return{
                ...state,
                selectedAnimal: animals
            }
        default:
            return state;
        }
    }

export default selected_reducer;
import { DOCTORS_ANIMALS_SUCCESS } from '../../actions/doctorActions';

const initialState = {
    theirAnimals: []
}

const theirAnimals_reducer = (state=initialState, {type, theirAnimals}) => {
    switch(type){
        case DOCTORS_ANIMALS_SUCCESS:
            return {
                ...state,
                theirAnimals: theirAnimals
            };
        default:
            return state;
        }
    }


export default theirAnimals_reducer;
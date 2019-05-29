import { FETCH_DOCTORS_SUCCESS } from '../../actions/doctorActions';



const initialState = {
    doctors: []
}

const doctors_reducer = (state=initialState, {type, doctors}) => {
    switch(type){
        case FETCH_DOCTORS_SUCCESS:
            return {
                ...state,
                doctors: doctors
            };
        default:
            return state;
        }
    }


export default doctors_reducer;
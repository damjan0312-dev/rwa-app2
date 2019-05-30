import {takeEvery, put, call} from 'redux-saga/effects';

import { DOCTORS_ANIMALS, doctorsAnimalsSuccess} from '../../actions/doctorActions';
import { fetchTheirAnimals }  from '../../api/doctorApi';


function* getThem(action) {

    try{
        console.log(action.id);
        console.log("tusam");
        const theirAnimals = yield call(fetchTheirAnimals, action.id);
        console.log(theirAnimals);
        yield put(doctorsAnimalsSuccess(theirAnimals));
    }
    catch(e){
        console.log(e);
    }
}

export function* watchDoctorsAnimals(){
    yield takeEvery(DOCTORS_ANIMALS, getThem);
}
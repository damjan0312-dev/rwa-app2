import {takeEvery, put, call} from 'redux-saga/effects';

import { FETCH_DOCTORS, fetchDoctorsSuccess} from '../../actions/doctorActions';
import { fetchAllDoctors }  from '../../api/doctorApi';


function* fetchThem(action) {

    try{
        const doctors = yield call(fetchAllDoctors);
        console.log(doctors);
        yield put(fetchDoctorsSuccess(doctors));
    }
    catch(e){
        console.log(e);
    }
}

export function* watchFetchDoctors(){
    yield takeEvery(FETCH_DOCTORS, fetchThem);
}
import {takeEvery, put, call, all, fork} from 'redux-saga/effects';

import { REQUEST_ANIMALS, receiveAnimals} from '../actions/actions';
import { fetchAllAnimals }  from '../api/api';

// other sagas
import { watchNewAnimalRequest } from './newAnimalSaga';
import { watchSelectedAnimal } from './selectAnimalSaga';
import { watchDeleteAnimalRequest } from './deleteAnimalSaga';
import { watchFetchDoctors } from './doctorSagas/fetchDoctorsSaga';
import { watchDoctorsAnimals } from './doctorSagas/doctorsAnimalsSaga';


function* getAnimals(action) {

    try{
        const animals = yield call(fetchAllAnimals);
        console.log(animals);
        yield put(receiveAnimals(animals));
    }
    catch(e){
        console.log(e);
    }
}

export function* fetchAnimals(){
    yield takeEvery(REQUEST_ANIMALS, getAnimals);
}


/*export default function* rootSaga(){
    yield all([
        getAnimals(),
        newAnimalRequest()
    ])
} */

export default function* rootSaga(){
    yield all([
        getAnimals(),
        fork(watchNewAnimalRequest),
        fork(watchSelectedAnimal),
        fork(watchDeleteAnimalRequest),
        fork(watchFetchDoctors),
        fork(watchDoctorsAnimals)

    ]);
}
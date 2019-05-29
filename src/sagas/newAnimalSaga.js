import { put,  takeEvery} from 'redux-saga/effects';

import { NEW_ANIMAL_REQUEST, newAnimalSuccess} from '../actions/actions';
import { Api }  from '../api/api';


/*export function* newAnimalRequest() {
    try{
        const { newAnimal } = yield take(NEW_ANIMAL_REQUEST);
        const newAnimalData = yield call(newAnimalPost, newAnimal);
        yield put(newAnimalSuccess(newAnimalData));
    }
    catch(e){
        console.log(e);
    }
}

export function* newAnimalsPostFunc(){
    yield takeEvery(NEW_ANIMAL_REQUEST, newAnimalRequest);
} 
*/


function* newAnimalRequest(action){
    try{
        const result = yield Api.newAnimalPost(action.newAnimal);
        if(result === true){
            yield put(newAnimalSuccess(action.newAnimal));
        }
    }
    catch(error){
        console.log(error);
    }
}

export function* watchNewAnimalRequest(){
    yield takeEvery(NEW_ANIMAL_REQUEST, newAnimalRequest);
}



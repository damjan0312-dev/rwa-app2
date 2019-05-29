import { put,  takeEvery} from 'redux-saga/effects';

import { DELETE_ANIMAL, deleteAnimalSuccess} from '../actions/actions';
import { Api }  from '../api/api';


function* deleteAnimal(action){
    try{
        const result = yield Api.deleteAnimal(action.animalToDelete);
        if(result === false){
            yield put(deleteAnimalSuccess(action.animalToDelete));
        }
    }
    catch(error){
        console.log(error);
    }
}

export function* watchDeleteAnimalRequest(){
    yield takeEvery(DELETE_ANIMAL, deleteAnimal);
}



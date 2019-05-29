import { put, takeEvery} from 'redux-saga/effects';

import { SELECT_ANIMAL, selectAnimalSuccess} from '../actions/actions';

import history from '../history';

function* selectedAnimal(action){
    try{
        
        yield put(selectAnimalSuccess(action.selectedAnimal));
        history.push('/detail');
    }
    catch(error){
        console.log(error);
    }
}

export function* watchSelectedAnimal(){
    yield takeEvery(SELECT_ANIMAL, selectedAnimal);
}

const URL = 'http://localhost:3001/doctors';
const URL_FOR_THEIR_ANIMALS = 'http://localhost:3001/animals';

export function* fetchAllDoctors () {
    try{
        const response = yield fetch(URL, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json'
            }
        });
        return yield(response.json());
    }
    catch(e){
        console.log(e);
    }
}

export function* fetchTheirAnimals (id) {
    try{
        console.log(`${URL_FOR_THEIR_ANIMALS}?doctorID=${id}`);
        const response = yield fetch(`${URL_FOR_THEIR_ANIMALS}?doctorID=${id}`, {
            method: 'GET',
            headers: {
                'content-type' : 'application/json'
            }
        });
        return yield(response.json());
    }
    catch(e){
        console.log(e);
    }
}
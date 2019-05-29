const URL = 'http://localhost:3001/doctors';

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
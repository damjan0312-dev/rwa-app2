const URL = 'http://localhost:3001/animals';

export const  fetchAllAnimals = async () => {
    try{

        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }
    catch(e){
        console.log(e);
    }
}

/*export const newAnimalPost = async (newAnimal) => {
    try{
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newAnimal)
        });
        const success = await response.json();
        console.log(success);
        return success;
    }
    catch(e){
        console.log(e);
    }
}

*/
export function* newAnimalPost (newAnimal) {
    try{
        console.log(newAnimal);
        const response = yield fetch(URL, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newAnimal)
        });
        return yield(response.status === 201);
    }
    catch(e){
        console.log(e);
    }
}
export function* deleteAnimal (id) {
    try{
        console.log(`${URL}/${id}`);
        const response = yield fetch(`${URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type' : 'application/json'
            }
        });
        return yield(response.status === 201);
    }
    catch(e){
        console.log(e);
    }
}

export const Api = {
    newAnimalPost,
    deleteAnimal
}
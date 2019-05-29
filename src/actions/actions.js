export const REQUEST_ANIMALS = "REQUEST_ANIMALS";
export const RECEIVE_ANIMALS = "RECEIVE_ANIMALS";

export const requestAnimals = () => ({type: REQUEST_ANIMALS});
export const receiveAnimals = (animals) => ({type: RECEIVE_ANIMALS, animals});

// POST 

export const NEW_ANIMAL_REQUEST = "NEW_ANIMAL_REQUEST";
export const NEW_ANIMAL_SUCCESS = "NEW_ANIMAL_SUCCESS";

export const newAnimalRequest = (newAnimal) => ({type: NEW_ANIMAL_REQUEST, newAnimal});
export const newAnimalSuccess = (animals) => ({type: NEW_ANIMAL_SUCCESS, animals});

// SELECT ANIMAL

export const SELECT_ANIMAL = "SELECT_ANIMAL";
export const SELECT_ANIMAL_SUCCESS = "SELECT_ANIMAL_SUCCESS";

export const selectAnimal = (selectedAnimal) => ({type: SELECT_ANIMAL, selectedAnimal});
export const selectAnimalSuccess = (animals) => ({type: SELECT_ANIMAL_SUCCESS, animals});

// DELETE ANIMAL

export const DELETE_ANIMAL = "DELETE_ANIMAL";
export const DELETE_ANIMAL_SUCCESS = "DELETE_ANIMAL_SUCCESS";

export const deleteAnimal = (animalToDelete) => ({type: DELETE_ANIMAL, animalToDelete});
export const deleteAnimalSuccess = (animals) => ({type: DELETE_ANIMAL_SUCCESS, animals});
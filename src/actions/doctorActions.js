export const FETCH_DOCTORS = "FETCH_DOCTORS";
export const FETCH_DOCTORS_SUCCESS = "FETCH_DOCTORS_SUCCESS";

export const fetchDoctors = () => ({type: FETCH_DOCTORS});
export const fetchDoctorsSuccess = (doctors) => ({type: FETCH_DOCTORS_SUCCESS, doctors});

export const DOCTORS_ANIMALS = "DOCTORS_ANIMALS";
export const DOCTORS_ANIMALS_SUCCESS = "DOCTORS_ANIMALS_SUCCESS";

export const doctorsAnimals = (id) => ({type: DOCTORS_ANIMALS, id});
export const doctorsAnimalsSuccess = (theirAnimals) => ({type: DOCTORS_ANIMALS_SUCCESS, theirAnimals});
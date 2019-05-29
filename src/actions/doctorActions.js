export const FETCH_DOCTORS = "FETCH_DOCTORS";
export const FETCH_DOCTORS_SUCCESS = "FETCH_DOCTORS_SUCCESS";

export const fetchDoctors = () => ({type: FETCH_DOCTORS});
export const fetchDoctorsSuccess = (doctors) => ({type: FETCH_DOCTORS_SUCCESS, doctors});
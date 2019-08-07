//Al lanzar la action de fetchBreeds, lanzar 1 para cada breed del Array que devuelve la API

import { getAllBreeds, getBreedImages } from '../apis/dogApi';

export const fetchBreeds = () => async dispatch => {
    const response = await getAllBreeds();
    return Object.keys(response.data.message).map((breed, index) => {
        return dispatch({ type: 'FETCH_BREED', breed, id: index });
    });
};

export const fetchBreedImages = (breed) => async dispatch => {
    const response = await getBreedImages(breed);
    dispatch({
        type: 'FETCH_BREED_IMAGES',
        payload: response.data.message,
        breed
    })
};

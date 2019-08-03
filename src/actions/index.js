import dogApi from '../apis/dogApi';

export const fetchBreeds = () => async dispatch => {
    const response = await dogApi.get();

    dispatch({type: 'FETCH_BREEDS', payload: response.data.message})
};

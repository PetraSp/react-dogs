import { combineReducers } from 'redux';
import breedsReducer from './BreedsReducer';

export default combineReducers({
    breeds: breedsReducer
});

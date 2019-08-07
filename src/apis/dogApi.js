import axios from 'axios';

const dogApi = axios.create({
    baseURL: 'https://dog.ceo/api/'
});

const getAllBreeds = () => dogApi.get('/breeds/list/all');

const getBreedImages = (breed) => dogApi.get(`/breed/${breed}/images`);

export {
    getAllBreeds,
    getBreedImages
}


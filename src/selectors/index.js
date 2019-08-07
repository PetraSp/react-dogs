import { createSelector } from 'reselect';

const getBreeds = (state) => state.breeds;

export const getTopBreedsImages = createSelector(
    [ getBreeds ],
    (breeds) =>
        Object.entries(breeds)
            .map(entry => entry[1])
            .sort((a, b) => (a.imgCount < b.imgCount) ? 1 : -1)
            .slice(0, 10)
);


//Conectar el selector al componente BreedList

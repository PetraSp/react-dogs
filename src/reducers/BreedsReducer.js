const initialState = [];
const initialBreedState = {
    images: [],
    imgCount: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_BREEDS":
            const { breed, id } = action;
            return {
                ...state,
                [breed]: {
                    ...initialBreedState,
                    name: breed,
                    id
                }
            };
        case "FETCH_BREED_IMAGES":
            return {
                ...state,
                [action.breed]: {
                    ...state[action.breed],
                    images: action.payload,
                    imgCount: action.payload.length,
                }
            };
        default:
            return state;
    }
};


//  modificar el Reducer para crear un state que se asemeje al esperado por la App:
// breedState: {
//    images: [],
//   id: 1,
//   name: 'bulldog',
// }


// Crear el state relativo a la action FETCH_BREED_IMAGES en el reducer,
// haciendo que actualice el array de images y imgCount

// Una vez todo eso todo eso funciona a nivel de requests y state en Redux
// vamos al componente de BreedList y conectamos un selector nuevo para coger las imágenes del state de Redux

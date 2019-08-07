import React from 'react';
import { connect } from 'react-redux';
import { fetchBreeds, fetchBreedImages } from '../actions';
import { getTopBreedsImages } from '../selectors';
import Loader from './Loader';
import { VictoryLabel, VictoryPie } from 'victory';

const COLOR_SCALE = [
    "#001f3f",
    "#0074D9",
    "#7FDBFF",
    "#39CCCC",
    "#3D9970",
    "#2ECC40",
    "#01FF70",
    "#FFDC00",
    "#FF851B",
    "#FF4136"
];


class BreedList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        this.props.fetchBreeds()
            .then(res =>
                Promise.all(res.map((breedAction) =>
                    this.props.fetchBreedImages(breedAction.breed)))
                    .then(() => {
                        this.setState(prevState =>
                            ({ loading: !prevState.loading }))
                    })
            );
    }

// Procesar el data para que se adapte al que usa la librería Victory:
// Crearse una función:
// Lo que hace es coger los datos del selector de Redux (topBreedImages: getTopBreedsImages(state))
// y los gestiona para crear objetos que sepa leer Victory. Luego lo inyectas en el componente:

    renderBreedsData = () => {
        const breedsData = this.props.topBreedImages;
        return breedsData.map((breed, index) => ({
            x: index + 1,
            y: breed.imgCount,
            label: `${breed.name} (${breed.imgCount})`
        }));
    };

    render() {
        const { loading } = this.state;
        return (
            <div className="container">
                {loading &&
                <Loader />
                }
                {!loading &&
                <VictoryPie
                    animate={{ duration: 2000 }}
                    colorScale={COLOR_SCALE}
                    data={this.renderBreedsData()}
                    height={200}
                    labelComponent={<VictoryLabel style={{ fontSize: 8 }} />}
                />
                }
            </div>
        );
    }
}

// Añadir la librería de gráficos Victory y gestionar el paso de data

const mapStateToProps = (state) => {
    return {
        breeds: state.breeds,
        topBreedImages: getTopBreedsImages(state)
    }
};

export default connect(
    mapStateToProps,
    {fetchBreeds, fetchBreedImages}
) (BreedList);

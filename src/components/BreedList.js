import React from 'react';
import { connect } from 'react-redux';
import { fetchBreeds } from '../actions';
import { getTopBreedsImages } from '../selectors';

class BreedList extends React.Component {
    componentDidMount() {
        this.props.fetchBreeds()
    }

    render(){
        console.log(this.props.breeds)
        return <div>BreedList</div>
    }
}

const mapStateToProps = (state) => {
    return {
        breeds: state.breeds,
        topBreedImages: getTopBreedsImages(state)
    }
};

export default connect(
    mapStateToProps,
    {fetchBreeds}
) (BreedList);

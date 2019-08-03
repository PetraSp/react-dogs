import React from 'react';
import { connect } from 'react-redux';
import { fetchBreeds } from '../actions';

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
    return {breeds: state.breeds}
}

export default connect(
    mapStateToProps,
    {fetchBreeds}
) (BreedList);

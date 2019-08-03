import React from 'react';
import { connect } from 'react-redux';
import { fetchBreeds } from '../actions';

class BreedList extends React.Component {
    componentDidMount() {
        this.props.fetchBreeds()
    }

    render(){
        return <div>BreedList</div>
    }
}

export default connect(
    null,
    {fetchBreeds}
) (BreedList);

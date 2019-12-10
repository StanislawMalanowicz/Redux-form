import React from 'react';
import { connect } from 'react-redux'

const MoviesContainer = (props) => 
        <ul>
            {props.movies.list.map((movie, index) => <li key={movie+'-'+index}> {movie} </li>)}
        </ul>

const mapStateToProps = (state) => {
    return ({
        movies: state.movies
    })
}
 
export default connect(mapStateToProps, {})(MoviesContainer)
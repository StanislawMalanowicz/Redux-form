import React from 'react';
import { connect } from 'react-redux'
import actions from '../duck/actions'

const AddMovieForm = (props) => {

    const inputRef = React.createRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('from formRef: ', inputRef.current.value);
        props.add(inputRef.current.value);
        inputRef.current.value = '';
    }
    return(
        <form action="sumbit" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text"/>
            <button>dodaj film!</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
   
    return({
        add: film => dispatch(actions.add(film))
    })
}

// const mapDispatchToProps = dispatch => ({
//     add: (movie) => dispatch(actions.add(movie))
// })

export default connect(null, mapDispatchToProps)(AddMovieForm)
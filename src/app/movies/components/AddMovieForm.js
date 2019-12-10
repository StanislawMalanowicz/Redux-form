import React from 'react';
import { connect } from 'react-redux'
import actions from '../duck/actions'



const AddMovieForm = (props) => {

    const inputRef = React.createRef()
    const delInputRef = React.createRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('from formRef: ', inputRef.current.value);
        props.add(inputRef.current.value);
        inputRef.current.value = '';
    }
    const deleteLastBtn = (e) => {
        console.log("delete Last")
        props.deleteLast();
    }
    const deleteSelectedBtn = (e) => {
        console.log('deleteSelected: ', delInputRef.current.value);
        props.deleteSelected(delInputRef.current.value);
    }
    const deleteBtn = (e) => {
        console.log('deleteAll');
        props.deleteAll()

    }
    return(
        <form action="sumbit" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text"/>
            <button>dodaj film!</button>
            <button onClick={deleteBtn} type="button">Usuń wszystko</button> <br/><br/>
            <input ref={delInputRef} type="text"/>
            <button onClick={deleteSelectedBtn} type="button">Usuń wybrany</button><br/>
            <button onClick={deleteLastBtn} type="button">Usuń ostatni</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
   
    return({
        add: film => dispatch(actions.add(film)),
        deleteAll: () => dispatch(actions.reset()),
        deleteSelected: (movie) => dispatch(actions.deleteMovie(movie)),
        deleteLast: () => dispatch(actions.deleteLastMovie())
    })
}

// const mapDispatchToProps = dispatch => ({
//     add: (movie) => dispatch(actions.add(movie))
// })

export default connect(null, mapDispatchToProps)(AddMovieForm)
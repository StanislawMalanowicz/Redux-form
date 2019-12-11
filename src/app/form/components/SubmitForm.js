import React from 'react';
import { connect } from 'react-redux';
import  actions  from '../duck/actions'

const SubmitForm = (props) => {

    const firstPassRef = React.createRef();
    const secondPassRef = React.createRef();
    
    const handleChange = () => {
        const firstPass = firstPassRef.current.value
        console.log('pass: ', firstPass)
        props.addPass(firstPass)
    }
    const handleSecondPass = () => {
        const secondPass = secondPassRef.current.value
        console.log('second pass: ', secondPass);
        props.addSecondPass(secondPass);
    }

    // const passSend = () => {
    //     console.log('pass send: ', firstPassRef.current.value);
    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit and validation')
        // props.passCheck()
    }

    return ( 
        <form onSubmit={handleSubmit}  >
            email: <input type="email"/><br/><br/><br/>
            name: <input type="text"/><br/><br/><br/>
            pass: <input onChange={handleChange} ref={firstPassRef} type="password"/><br/><br/>
            one more pass:<input onChange={handleSecondPass} ref={secondPassRef} type="password" /><br/><br/>
            <button type="submit">zaloguj</button>
    {<span>{props.personalInfo.email}</span>}

    {props.personalInfo.isPassCorrect ? (<p>takie same hasla</p>) : (<p>rozne hasla</p>)}
        </form>
     );
}


const mapDispatchToProps = dispatch => {

    return ({
        addPass: pass => dispatch(actions.handlePassword(pass)),
        addSecondPass: pass => dispatch(actions.handleConfirmPassword(pass)),
        // passCheck: () => dispatch(actions.checkPasswords())
    })
}

const mapStateToProps = (state) => {
    return ({
        personalInfo: state.movies
    })
}


 
export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm)
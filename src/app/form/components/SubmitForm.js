import React from 'react';
import { connect } from 'react-redux';
import  actions  from '../duck/actions'

const SubmitForm = (props) => {

    const firstPassRef = React.createRef();
    const secondPassRef = React.createRef();
    const emailRef = React.createRef();
    
    const handleChange = () => {
        const firstPass = firstPassRef.current.value
        // console.log('pass: ', firstPass)
        props.addPass(firstPass)
    }
    const handleSecondPass = () => {
        const secondPass = secondPassRef.current.value
        // console.log('second pass: ', secondPass);
        props.addSecondPass(secondPass);
    }
    const handleEmailVal = () => {
        const emailValue = emailRef.current.value;
        // console.log('handleEmai: ', emailValue);
        props.addEmail(emailValue)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit and validation')
    }
    const emailRegex = /@/gm;
    
    const emailAlert = () => emailRegex.test(props.personalInfo.email) ? null : <span>niepoprawny email</span>;


    const passAlert = () => props.personalInfo.pass.length >= 6 ? null: <span>hasko za krótkie</span>
    //  <span>za krótkie hasło</span>
    const secondPassAlert = () => props.personalInfo.isPassCorrect ? null : <span>haslo musi być takie samo</span>;
    return ( 
        <form onSubmit={handleSubmit}  >
            email: <input type="email" ref={emailRef} onChange={handleEmailVal} />{emailAlert()}<br/>
            {/* <span>email is: <strong>{props.personalInfo.email}</strong></span> */}
            <br/><br/>
            pass: <input onChange={handleChange} ref={firstPassRef} type="password"/>{passAlert()}<br/><br/>
            one more pass:<input onChange={handleSecondPass} ref={secondPassRef} type="password" />{secondPassAlert()}<br/><br/>
            <button type="submit">zaloguj</button>
            {props.personalInfo.isPassCorrect ? <p>takie same hasla</p> : <p>rozne hasla</p>}
        </form>
     );
}


const mapDispatchToProps = dispatch => {

    return ({
        addPass: pass => dispatch(actions.handlePassword(pass)),
        addSecondPass: pass => dispatch(actions.handleConfirmPassword(pass)),
        addEmail: email => dispatch(actions.handleEmail(email))
    })
}

const mapStateToProps = (state) => {
    return ({
        personalInfo: state.person
    })
}


 
export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm)
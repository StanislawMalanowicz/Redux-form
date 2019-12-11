import React, { Component } from 'react';
import './App.css';
import SubmitForm from './app/form/components/SubmitForm'

// class RefIput extends Component {
//   state = { 
//     text: ""
//   }

//   inputRef = React.createRef();

//   updateText = (e) => {
//     // e.preventDefault();
//     this.setState({
//       text: this.inputRef.current.value
//     })
//   }

//   render() { 
//     return ( 
//       <div>
//         <input ref={this.inputRef} type="text" />
//         <h1>Text Is:</h1>
//         <p>{this.state.text}</p>
//         <button onClick={this.updateText}>update</button>
//       </div>
//      );
//   }
// }
 


class App extends Component {
  render() { 
    return ( 
          <div className="App">
           <section className="header">
             <h1>I am header</h1>
             <SubmitForm/>
           </section>
         </div>
     );
  }
}
 



export default App;

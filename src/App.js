import React, { Component } from 'react';
import './App.css';
import SubmitForm from './app/form/components/SubmitForm'


 
class App extends Component {
  render() { 
    return ( 
          <div className="App">
            <section className="header">
              <h1>I am header</h1>
            </section>
            <SubmitForm/>
          </div>
     );
  }
}
 



export default App;

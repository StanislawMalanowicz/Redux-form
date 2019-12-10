import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './app/movies/components/MoviesContainer';

class RefIput extends Component {
  state = { 
    text: ""
  }

  inputRef = React.createRef();

  updateText = (e) => {
    e.preventDefault();
    this.setState({
      text: this.inputRef.current.value
    })
  }

  render() { 
    return ( 
      <div>
        <input ref={this.inputRef} type="text" />
        <h1>Text Is:</h1>
        <p>{this.state.text}</p>
        <button onClick={this.updateText}>update</button>
      </div>
     );
  }
}
 


class App extends Component {
  render() { 
    return ( 
          <div className="App">
            <h1>Hello redux</h1>
            <ul>
              <li>Film 1</li>
              <li>Film 2</li>
            </ul>
            <MoviesContainer/>
            <RefIput/>
         </div>
     );
  }
}
 



export default App;

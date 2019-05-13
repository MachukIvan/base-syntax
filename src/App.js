import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userNames: [
      'Machuk Ivan',
      'Machuk Kiril'
    ]
  }

  nameChangedHandler = (event) => {
    this.setState({
      userNames: [
        event.target.value,
        'Machuk Kiril'
      ]
    });
  }

  render () {
    const style = {
      backgroundColor: "#eee",
      padding: "30px"
    }

    return (
      <div className="App" style={style}>
        <UserInput 
          changed={this.nameChangedHandler}
        />
        <UserOutput 
          firstPar="This is first paragraph"
          secondPar="This is second paragraph"
          userName={this.state.userNames[0]}
        />
        <UserOutput 
          firstPar="This is third paragraph"
          secondPar="This is fourth paragraph"
          userName={this.state.userNames[1]}
        />
      </div>
    );
  }
}

export default App;

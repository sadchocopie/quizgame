import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Questino from './components/Question';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>React Quiz</h2>
        <Question content="what is your favorite food?" />
      </div>
    );
  }
}

export default App;

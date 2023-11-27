import './App.css'
import Homepage from './components/Homepage'
import React from "react";

import Quiz from './components/Quiz';
import Result from './components/Result';

class App extends React.Component {

  render() {
    return (
      <>
<Homepage />
<Quiz />
<Result/>
       
      </>
    )
  }
}
export default App

import React from 'react';
import './App.css';
import VacationContainer from './VacationContainer'

const styles = {
  inlineBlock: {
    display: 'inline-block',
  }
}

function App() {
  return (
    <div className="App">
      <VacationContainer style={styles.inlineBlock}/>
    </div>
  );
}

export default App;

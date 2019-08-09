import React from 'react';
import './App.css';
import FriendsList from './Friends/'

const styles = {
  justifyContent: "center",
  display: "flex",
  flexWrap: "wrap",
}

function App() {
  return (
    <div className="App" style={styles}>
      <FriendsList />
    </div>
  );
}

export default App;

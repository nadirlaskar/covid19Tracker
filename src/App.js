import React from "react";
import CardList from './CardList';

function App() {
  // Structure of your application
  // Render the header and cardList component
  return (
    <div style={{padding: 16}}>
      <h1 style={{color:"#3333", margin: 18}}>Covid19 Tracker</h1>
      <CardList />
      <CardList country="USA"/>
      <CardList country="India"/>
      <CardList country="UK"/>
      <CardList country="China"/>
    </div>
  );
}

export default App;

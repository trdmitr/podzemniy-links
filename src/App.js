import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import AddToHomeScreenButton from './Components/AddToHomeScreenButton/AddToHomeScreenButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <h2>Виталий Подземный</h2>
        <p>Здесь собраны ссылки на необходимые сервисы Виталия! </p>
        <Home/>
        <AddToHomeScreenButton/>
      </header>
    </div>
  );
}

export default App;

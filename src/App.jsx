import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/header/AppHeader.jsx'
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients';
import BurgerConstructor from './components/burger-constructor/BurgerConstructor';

class App extends React.Component {
  render() {
    return(
    <div className="App">
      <AppHeader/>
      <main div style={{ display: 'flex'}}>
        <BurgerIngredients/>
   
      </main>
    </div>
  );
}
}

export default App;

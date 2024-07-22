import React from 'react';
import './App.css';
import AppHeader from './components/header/AppHeader.jsx'
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients';
import BurgerConstructor from './components/burger-constructor/BurgerConstructor';

class App extends React.Component {
  render() {
    return(
    <div className="App">
      <AppHeader/>
      <main style={{ display: 'flex', justifyContent: 'center', gap: '40px'}}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </main>
    </div>
  );
}
}

export default App;

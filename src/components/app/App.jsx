import React from 'react';
import './app.css';
import AppHeader from '../header/app-header.jsx'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';

class App extends React.Component {
  render() {
    return(
    <div className="App">
      <AppHeader/>
      <main>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </main>
    </div>
  );
}
}

export default App;

import React from 'react';
import burgerIngr from '../../utils/data.js';
import PropTypes from 'prop-types';
import Tabs from '../tabs/tabs.jsx';
import ViewIngredients from '../view-ingredients/view-ingredients.jsx';
import './burger-ingredients.css';
import { Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {burgerPropTypes} from '../../utils/prop-types.js';

const Ingredients = ({burgerIngr}) => {
  return (
    <div  className='ingredients'>
      <ViewIngredients burgerIngr={burgerIngr}  name='Булки' type='bun'/>
      <ViewIngredients burgerIngr={burgerIngr}  name='Соусы' type='sauce'/>
      <ViewIngredients burgerIngr={burgerIngr}  name='Начинки' type='main'/>
    </div>  
  )
}

Ingredients.propTypes = {
  burgerIngr: PropTypes.arrayOf(burgerPropTypes).isRequired
}

class BurgerIngredients extends React.Component {
  render() {

          return (  
            <div>
              <p className="text text_type_main-large pt-10">Соберите бургер</p>
              <Tabs/>
              <Ingredients burgerIngr={burgerIngr}/>
            </div>
          )
        }
      }


export default BurgerIngredients;
import React from 'react';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngr from '../../utils/data.js';
import PropTypes from 'prop-types';


const Tabs = ()  => {
  const [current, setCurrent] = React.useState('one')
  return (
    <div style={{ display: 'flex' }} className='pt-5 pb-10'>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}

const ViewIngredients = ({burgerIngr, name, type}) => {
  return (
    
      <>
      <p style={{textAlign: 'left'}} className="text text_type_main-medium pb-6">{name}</p>
      <div style={{display: "flex",flexWrap: 'wrap'}}>
      {burgerIngr.filter(ingr => ingr.type == type).map(ingr => (
        <div style={{textAlign:'center', width:'268px', flexDirection: 'column', display: "flex", position: 'relative'}} className='pb-10 pl-4 pr-4'>
          <img src = {ingr.image}/>
          <Counter count={1} size="default" extraClass="m-1" />
          <div style={{alignItems:'center', display: "flex", justifyContent: "center"}}>
            <h3 className='pr-2'>{ingr.price}</h3><CurrencyIcon type="primary" />
          </div>
          <h3 className="text text_type_main-default">{ingr.name}</h3>
        </div>
      ))}    
    </div>
    </>
  )
}

ViewIngredients.propTypes = {
  burgerIngr: PropTypes.node
}

Ingredients.propTypes = {
  burgerIngr: PropTypes.node
}


const Ingredients = ({burgerIngr}) => {
  return (
    <div  style={{width:'612px', height:'600px',  overflow:'hidden', overflowY: 'scroll', scrollbarWidth: 'thin'}}>
      <ViewIngredients burgerIngr={burgerIngr}  name='Булки' type='bun'/>
      <ViewIngredients burgerIngr={burgerIngr}  name='Соусы' type='sauce'/>
      <ViewIngredients burgerIngr={burgerIngr}  name='Начинки' type='main'/>
    </div>  
  )
}

class BurgerIngredients extends React.Component {
  render() {

          return (  
            <div>
              <p  style={{textAlign: 'left'}} className="text text_type_main-large pt-10">Соберите бургер</p>
              <Tabs/>
              <Ingredients burgerIngr={burgerIngr}/>
            </div>
          )
        }
      }


export default BurgerIngredients;
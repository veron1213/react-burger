import React from 'react';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngr from '../../utils/data.js';
import PropTypes from 'prop-types';


const ViewIngredientsConstructor = ({burgerIngr}) => {
  return (
    
      <>
      <div style={{display: "flex", flexDirection: 'column', gap: '8px', width:'612px', height:'450px', overflow:'hidden', overflowY: 'scroll', scrollbarWidth: 'thin'  }} className='pb-2'>

      {burgerIngr.filter(ingr => ingr.type !== 'bun').map(ingr => (
        <div style={{width:'568px'}}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={ingr.name}
            price={ingr.price}
            thumbnail={ingr.image}
          />
        </div>
      ))}    
    </div>
    </>
  )
}

ViewIngredientsConstructor.propTypes = {
  burgerIngr: PropTypes.node
}

const IngredientsConstructor = ({burgerIngr}) => {
  const {  name, price, image  } = burgerIngr.find(ingr => ingr._id == '60666c42cc7b410027a1a9b1') || {};
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', width:'568px'}} className='ml-6 pb-2'>
          
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${name} (верх)`}
            price={`${price}`}
            thumbnail={`${image}`}
          />
          </div>
          <ViewIngredientsConstructor burgerIngr={burgerIngr}/>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width:'568px'}} className='ml-6'>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${name} (низ)`}
            price={`${price}`}
            thumbnail={`${image}`}           
          />
          </div>
        </>
      )
}

IngredientsConstructor.propTypes = {
  burgerIngr: PropTypes.node
}

const ResultSum = () => {
  return (
    <div style={{ display: 'flex', textAlign: 'right', justifyContent: "right",alignItems:'center' }} className='mt-10 mr-4'>
      <div style={{ display: 'flex', alignItems:'center'}} className='pr-2'>
      <h3 className='pr-2 text text_type_main-medium'>610</h3><CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="medium" >
        Оформить заказ
      </Button>

    </div>
  )
}

class BurgerConstructor extends React.Component {
    render() {
  
            return (  
              <div className="mt-25" style={{ height:'600px', width:'612px'}}>
                <IngredientsConstructor burgerIngr={burgerIngr}/>
                <ResultSum/>
              </div>
            )
          }
        }
  
  
  export default BurgerConstructor;
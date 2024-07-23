import React from 'react';
import { ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngr from '../../utils/data.js';
import ViewIngredientsConstructor from '../view-ingredients-constructor/view-ingredients-constructor.jsx'
import ResultSum from '../result-sum/result-sum.jsx'
import './burger-constructor.css'


class BurgerConstructor extends React.Component {
    render() {
      const {  name, price, image  } = burgerIngr.find(ingr => ingr._id == '60666c42cc7b410027a1a9b1') || {};
            return (  
              <div className="mt-25 burger-constructor">
                <div className='ml-6 pb-2 burger-bun'>
          
                  <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${name} (верх)`}
                    price={`${price}`}
                    thumbnail={`${image}`}
                  />
                </div>
                <ViewIngredientsConstructor burgerIngr={burgerIngr}/>
                <div className='ml-6 burger-bun'>
                  <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${name} (низ)`}
                    price={`${price}`}
                    thumbnail={`${image}`}           
                  />
                </div>
                <ResultSum/>
              </div>
            )
          }
        }
  
  
  export default BurgerConstructor;
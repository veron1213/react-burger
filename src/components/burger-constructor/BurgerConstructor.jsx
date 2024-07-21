import React from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngr from '../../utils/data.js';


const IngredientsConstructor = ()  => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
    
          />
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
           
          />
        </div>
      )
}

class BurgerConstructor extends React.Component {
    render() {
  
            return (  
              <div>
                <IngredientsConstructor/>
              </div>
            )
          }
        }
  
  
  export default BurgerConstructor;
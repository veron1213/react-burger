import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import {burgerPropTypes} from '../../utils/prop-types.js';
import './view-ingredient.css';


class ViewIngredient extends React.Component {
    render() {
  
            return ( 

            <div className='pb-10 pl-4 pr-4 blockIngredient'>
                    <img src = {this.props.ingr.image}/>
                    <Counter count={1} size="default" extraClass="m-1" />
                    <div className='ingredient'>
                      <h3 className='pr-2'>{this.props.ingr.price}</h3>
                      <CurrencyIcon type="primary" />
                    </div>
                    <h3 className="text text_type_main-default">{this.props.ingr.name}</h3>
                  </div>
            )
          }
        }
        ViewIngredient.propTypes = {
          ingr: burgerPropTypes.isRequired
        };
        export default ViewIngredient;
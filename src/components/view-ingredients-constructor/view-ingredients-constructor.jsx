import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './view-ingredients-constructor.css';
import {burgerPropTypes} from '../../utils/prop-types.js';
import PropTypes from 'prop-types';

  class ViewIngredientsConstructor extends React.Component {
    render() {  
            return (  
                <div className='pb-2 scroll'>
  
                {this.props.burgerIngr.filter(ingr => ingr.type !== 'bun').map(ingr => (
                  <div className='ingr' key={ingr._id}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={ingr.name}
                      price={ingr.price}
                      thumbnail={ingr.image}
                    />
                  </div>
                ))}    
              </div>
            )}}

            ViewIngredientsConstructor.propTypes = {
              burgerIngr: PropTypes.arrayOf(burgerPropTypes).isRequired
            }
    

export default ViewIngredientsConstructor;
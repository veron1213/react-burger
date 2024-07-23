import React from 'react';
import ViewIngredient from '../view-ingredient/view-ingredient.jsx';
import {burgerPropTypes} from '../../utils/prop-types.js';
import PropTypes from 'prop-types';
import './view-ingredients.css'

class ViewIngredients extends React.Component {
    render() {
  
            return (  
                <>
                <p className="text text_type_main-medium pb-6">{this.props.name}</p>
                <div className='rowIngredient'>
                {this.props.burgerIngr.filter(ingr => ingr.type == this.props.type).map(ingr => (
                  <ViewIngredient ingr={ingr} key={ingr._id}/>
                ))}    
              </div>
              </>
            )
          }
        }

        ViewIngredients.propTypes = {
          burgerIngr: PropTypes.arrayOf(burgerPropTypes).isRequired
        }

        export default ViewIngredients;
import React from 'react';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import './result-sum.css'

class ResultSum extends React.Component {
    render() {
  
            return (  
                <div className='mt-10 mr-4 sumBlock'>
                    <div className='pr-2 sum'>
                        <h3 className='pr-2 text text_type_main-medium'>610</h3>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="button" type="primary" size="medium" >
                        Оформить заказ
                    </Button>          
                </div>
            )
          }
        }

export default ResultSum;
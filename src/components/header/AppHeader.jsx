import React from 'react';
import { BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

class AppHeader extends React.Component {
    render() {
        return (
        <div style={{display: "flex", alignItems : "center", justifyContent: "space-between"}}>
                <div style={{display: "flex"}}>
                    <BurgerIcon type="primary"/> 
                    <p className="text text_type_main-small">
                        Конструктор
                    </p>
                    <ListIcon type="secondary" /> 
                    <p className="text text_type_main-small">
                        Лента заказов
                    </p>
                </div>
                <div>
                    <Logo/>
                </div>
                <div>
                    <ProfileIcon type = "secondary"/>
                    <p className="text text_type_main-small">
                        Личный кабинет
                    </p> 
                </div>

        </div>
   
) }
}

export default AppHeader;
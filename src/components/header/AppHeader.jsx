import React from 'react';
import { BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

class AppHeader extends React.Component {
    render() {
        return (
        <div style={{display: "flex", alignItems : "center",justifyContent: "space-between"}}>
                <div style={{display: "flex", flex: "1 1", alignItems : "center"}}>
                    <BurgerIcon type="primary"/> 
                    <p className="text text_type_main-default ml-2 mr-2">
                        Конструктор
                    </p>
                    <ListIcon type="secondary" /> 
                    <p className="text text_type_main-default ml-2">
                        Лента заказов
                    </p>
                </div>
                    <Logo/>
                    <div style={{display: "flex", flex: "1 1", justifyContent: "flex-end", alignItems : "center"}}>
                    <ProfileIcon type = "secondary"/>
                    <p className="text text_type_main-default ml-2">
                        Личный кабинет
                    </p> 
                </div>

        </div>
   
) }
}

export default AppHeader;
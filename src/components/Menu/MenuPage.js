import React from "react";
import Template from "./Template"

function MenuPage() {

    return (

        <React.Fragment>
        <Template collection={'Przystawki'} title={'Przystawki'}/>,
        <Template collection={'Obiady'} title={'Obiady'}/>,
        <Template collection={'Salatki'} title={'Salatki'}/>
        </React.Fragment>
    )

}

export default MenuPage;
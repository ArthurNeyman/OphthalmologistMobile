import React from "react";

import { Text } from "react-native";

//как добраться
const RouteScreen =(props)=>{
    const address=props.route.params.adddressInfo
    return(
        <Text>Комонент в разработке</Text>
    )
}

export default RouteScreen;
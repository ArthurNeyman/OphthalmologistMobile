import React from "react";

import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//как добраться
const RouteScreen = (props) => {
    const address = props.route.params.adddressInfo
    return (
        <ScrollView>
            <Text style={{ fontSize: 30, textAlign: "center" }}> Комопннет отображающий информацию в разработке </Text>
        </ScrollView>

    )
}

export default RouteScreen;
import React from "react";

import { Text, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"

const RouteScreen = (props) => {
    const address = props.route.params.adddressInfo
    return (
        <>
            <ScrollView>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <FontAwesome5Icon style={{padding:20}} name="route" size={170} color={"#00ADA8"} />
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 20, color: "black" }}>    Мы находимся по адресу: {address.address + "\n"}</Text>
                    {
                        address.comments.map(comment => <Text style={{ fontSize: 20, color: "black" }} key={comment.length} >    {comment}</Text>)
                    }
                </View>
            </ScrollView>
        </>
    )
}

export default RouteScreen;
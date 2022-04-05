import React from 'react';
import { View, Text, Image, Dimensions, } from "react-native";
import { Card } from 'react-native-material-ui';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"

const CardComponent = ({ id, name, toNavigate }) => {
    const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');
    return (
        <Card onPress={() => toNavigate()}>
            <View style={{ padding:20,minHeight:windowsHeight*0.1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
                <View style={{ padding:5,flex: 5,flexDirection: "row",justifyContent:"center",alignContent:"center" }}>
                    <Text style={{flex:1,color: "black", fontSize: 20,textAlign:"left" }}>{name}</Text>
                </View>
                <FontAwesomeIcon size={55} color={"#00ADA8"} name="list-alt" />
            </View>
        </Card>
    )
}

function GetImage({ num }) {
    return <Image source={require("../../src/images/investigation.png")} />
}
export default CardComponent;
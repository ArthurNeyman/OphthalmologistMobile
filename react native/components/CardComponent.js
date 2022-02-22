import React from 'react';
import { View, Text, Image, Dimensions, } from "react-native";
import { Card } from 'react-native-material-ui';

const CardComponent = ({ id, name, toNavigate }) => {
    const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');
    return (
        <Card onPress={() => toNavigate()}>
            <View style={{ height: windowsHeight * 0.25, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
                <View style={{ alignItems: "center", flex: 2 }}>
                    <GetImage num={id} />
                </View>
                <View style={{ flex: 5 }}>
                    <View>
                        <Text style={{ paddingTop: 30, paddingEnd: 15, color: "black", fontSize: 20 }}>{name}</Text>
                    </View>
                    <View style={{ flexDirection: "row", paddingTop: 10, paddingBottom: 20 }}>
                    </View>
                </View>
            </View>
        </Card>
    )
}

function GetImage({ num }) {
    return <Image source={require("../../src/images/investigation.png")} />
}
export default CardComponent;
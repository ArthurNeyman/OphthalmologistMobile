import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card } from 'react-native-material-ui';

const  CardComponent = ({id,name,toAsck,toNavigate}) => {
    return (
        <Card onPress={()=>toNavigate()}>
            <View style={{ height: 130, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
                <View style={{ alignItems: "center", flex: 2 }}>
                    <GetImage num={id} />
                </View>
                <View style={{ flex: 5 }}>
                    <View>
                        <Text style={{ paddingTop: 30, paddingEnd: 15, color: "black", fontSize: 20 }}>{name}</Text>
                    </View>
                    <View style={{ flexDirection: "row", paddingTop: 10, paddingBottom: 20 }}>
                        {/* <TouchableOpacity style={{ flex: 1, textAlign: "center", paddingHorizontal: 2 }}
                            onPress={() => toAsck()}>
                            <Text style={{ color: "#00ADA8", fontSize: 13, fontWeight: "bold" }} >ЗАДАТЬ ВОПРОС</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, textAlign: "center", fontSize: 10, paddingHorizontal: 2 }}
                            onPress={() => { toNavigate() }}>
                            <Text style={{ color: "#00ADA8", fontSize: 13, fontWeight: "bold" }}>ПОДРОБНЕЕ</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </View>
        </Card>
    )
}

function GetImage({ num }) {
    if (num == 0) return <Image source={require("../../src/images/investigation.png")} />
    else if (num == 1) return <Image source={require("../../src/images/OperatingTableService.png")} />
    else if (num == 2) return <Image source={require("../../src/images/MedicineService.png")} />
    else return <Image source={require("../../src/images/EyeService.png")} />
}
export default CardComponent;
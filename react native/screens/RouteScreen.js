import React from "react";

import { Text, ImageBackground, View, Linking, Image, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"

const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');

const RouteScreen = (props) => {
    const address = props.route.params.adddressInfo
    return (
        <>
            <ImageBackground style={{ flex: 1 }} source={require('../../src/images/back.png')}>

                <View style={{ flex: 1, width: "100%", heigth: "100%", paddingTop: 50 }}>
                    <ScrollView
                        style={{ backgroundColor: "white", borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                        <View style={{ alignItems: "center" }}>
                            <Image style={{ height: windowsHeight * 0.3, resizeMode: "contain", borderTopRightRadius: 30, borderTopLeftRadius: 30 }} source={require('../../src/images/opth.jpg')} />
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ flex: 1, flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
                                <Text style={{ flex: 3, fontSize: 20, color: "black", textAlign: "center", paddingTop: 10 }}>    Мы находимся по адресу: {address.address + "\n"}</Text>
                            </View>
                            <Text style={{ color: "black", fontSize: 20, textAlign: "center" }}> {address.comments.replace("<br/>", "\n")}</Text>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + address.address)}>
                                <Text style={{ fontSize: 25, textAlign: "center", color: "#00ADA8", padding: 10 }}>Показать на карте</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>
            </ImageBackground>

        </>
    )
}

export default RouteScreen;
import React from "react";

import { Text, StyleSheet, View, Linking, Image, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"

const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');

const RouteScreen = (props) => {
    const address = props.route.params.adddressInfo
    return (
        <>
            <ScrollView>
                <View style={{ backgroundColor: "white", margin: 10,padding:5 }}>
                    <Text style={{ fontSize: 20, color: "black", textAlign: "center",paddingTop:30 }}>Мы находимся по адресу: {"\n"+address.address}</Text>
                    <Text style={{ fontSize: 20, color: "black", textAlign: "justify",paddingTop:10 }}></Text>
                    <Text style={{ color: "black", fontSize: 19, textAlign: "left" }}>{" \t "+address.comments.replace("<br/>", "\n \t")}</Text>
                    <View style={{alignItems:"center",paddingBottom:10,paddingTop:20}}>
                    <Image style={{ height: windowsHeight * 0.24, resizeMode: "contain"}} source={require('../../src/images/opth.jpg')} />
                    </View>
                    <TouchableOpacity  style={{paddingBottom:30}}onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + address.address)}>
                        <Text style={{ fontSize: 25, textAlign: "center", color: "#00ADA8", padding: 10 }}>Открыть на карте</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default RouteScreen;
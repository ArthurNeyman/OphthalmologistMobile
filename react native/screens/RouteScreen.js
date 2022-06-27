import React from "react";
import { Text, StyleSheet, View, Linking, Image, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from 'react-native';
import { Card } from "react-native-material-ui";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"

const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');


//скрин как добраться
const RouteScreen = (props) => {
    const address = props.route.params.adddressInfo
    return (
        <>
            <ScrollView style={{ backgroundColor: "white", paddingTop: StatusBar.currentHeight}}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: windowWidth, height: windowsHeight / 2.8 }} source={require('../../src/images/opth.jpg')} />
                </View>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 20, color: "black", textAlign: "center", paddingTop: 10 }}>Мы находимся по адресу: {"\n" + address.address}</Text>
                        <Text style={{ fontSize: 20, color: "black" }}></Text>
                        <Text style={{ fontSize: 20, color: "black" }}>{" \t " + address.comments.replace("<br/>", "\n \t")}</Text>
                        <View style={{ alignItems: "center" }}>
                        </View>
                    </View>
                    <View style={{ flex: 1,paddingBottom:50 }}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + address.address)}>
                            <Card>
                                <View style={{flex:1,backgroundColor:"#00ADA8",flexDirection:"row",alignItems:"center"}}>
                                    <Text style={{ flex:5,fontSize: 24, textAlign: "center", color: "white", padding: 10 }}>Открыть на карте</Text>
                                    <FontAwesomeIcon style={{ flex:1,padding: 15 }} name="map" color={"white"} size={50} />

                                </View>
                            </Card>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default RouteScreen;

const styles = StyleSheet.create({})
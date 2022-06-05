import React from "react";
import { TouchableOpacity, Linking, View, Text, StyleSheet, Dimensions } from "react-native";
import { Card } from "react-native-material-ui";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"

const ContactCard = ({ item }) => {
    return <TouchableOpacity
        onPress={() => {
            Linking.canOpenURL(`tel:'+7 3842${item.contact}`).then(supported => {
                if (supported) {
                    Linking.openURL(`tel:'+7 3842${item.contact}`);
                } else {
                    alert("Не могу открыть приложение вызовов")
                }
            });
        }}>
        <Card style={{ container: { height: 80, backgroundColor: "#00ADA8" } }}>
            <View style={{ flex: 1, flexDirection: "row", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
                <View style={{ flex: 6, flexDirection: "column", alignContent: "center", justifyContent: "center", padding: 10 }}>
                    <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>{item.name}</Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>(+7 3842) {item.contact}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignContent: "center", padding: 10 }}>
                    <FontAwesomeIcon size={50} color={"white"} name="phone" />
                </View>
            </View>
        </Card>
    </TouchableOpacity>

}

export default ContactCard;

const styles = StyleSheet.create({})
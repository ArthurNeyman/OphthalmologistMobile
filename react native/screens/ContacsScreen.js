import React from "react";
import { FlatList, TouchableOpacity, Linking, View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { linkToWhatsApp } from "../redux/actions/application_actions";


const RenderContact = ({ item }) => {
    return <View style={{ paddingBottom: 15, flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Text style={{ paddingStart: 15, paddingEnd: 15, flex: 5, fontSize: 16, color: "black", fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ paddingStart: 15, paddingEnd: 15, flex: 8, fontSize: 18, fontWeight: "bold", color: "black" }}>(+7 3842) {item.contact}</Text>
        <TouchableOpacity
            style={{ paddingEnd: 20 }}
            onPress={() => {
                Linking.canOpenURL(`tel:'+7 3842${item.contact}`).then(supported => {
                    if (supported) {
                        Linking.openURL(`tel:'+7 3842${item.contact}`);
                    } else {
                        alert("Не могу открыть приложение вызовов")
                    }
                });
            }}>
            <FontAwesomeIcon size={25} color={"#00ADA8"} name="phone" />
        </TouchableOpacity>
    </View>
}

const ContactsScreen = (props) => {
    const contacts = props.route.params.contacts
    return (
        <ScrollView>
            <View>
                <Image
                    style={{ width: "100%" }}
                    source={require('../../src/images/HomePageImage.png')} />
            </View>
            <View style={{ paddingTop: 10 }}>
                <Text style={styles.boldText}>{contacts.mainContacts[0].name}</Text>
            </View>
            <TouchableOpacity
                onPress={() => { linkToWhatsApp(contacts.mainContacts[0].contact) }}
                style={{ justifyContent: "center", flexDirection: "row", alignItems: "center", padding: 0 }}>
                <FontAwesomeIcon style={{ padding: 15 }} name="whatsapp" color={"#00ADA8"} size={50} />
                <Text style={{ ...styles.boldText, fontSize: 25 }}>{contacts.mainContacts[0].contact}</Text>
            </TouchableOpacity>
            <View >
                <Text style={{ ...styles.boldText, paddingBottom: 15 }}>Другие контакты</Text>
                {contacts.contacts.map(contact => <RenderContact item={contact} />)}
            </View>
        </ScrollView>
    )
}

export default ContactsScreen;

const styles = StyleSheet.create({
    simpleText: {
        color: "black",
        fontSize: 20,
        padding: 5,
        textAlign: "center"
    },
    boldText: {
        color: "black",
        fontSize: 20,
        padding: 5,
        fontWeight: "bold",
        textAlign: "center"
    }
});
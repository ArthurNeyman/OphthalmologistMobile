import React from "react";
import { TouchableOpacity, Linking, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-material-ui";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { linkToWhatsApp } from "../redux/actions/application_actions";

const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');


const RenderContact = ({ item }) => {
    return <Card style={{ container: { height: 80, backgroundColor: "#00ADA8" } }}>
        <View style={{ flex: 1, flexDirection: "row", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
            <View style={{ flex: 6, flexDirection: "column",alignContent: "center",justifyContent: "center",padding:10}}>
                <Text style={{  fontSize: 18, color: "white", fontWeight: "bold" }}>{item.name}</Text>
                <Text style={{  fontSize: 20, fontWeight: "bold", color: "white" }}>(+7 3842) {item.contact}</Text>
            </View>
            <View style={{ flex: 1,justifyContent: "center",alignContent:"center",padding:10}}>
                <TouchableOpacity
                    onPress={() => {
                        Linking.canOpenURL(`tel:'+7 3842${item.contact}`).then(supported => {
                            if (supported) {
                                Linking.openURL(`tel:'+7 3842${item.contact}`);
                            } else {
                                alert("Не могу открыть приложение вызовов")
                            }
                        });
                    }}>
                    <FontAwesomeIcon size={50} color={"white"} name="phone" />
                </TouchableOpacity>
            </View>
        </View>
    </Card>
}

const ContactsScreen = (props) => {
    const contacts = props.route.params.contacts
    return (
        <View>
            <ScrollView>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        style={{ width: windowWidth, height: windowsHeight / 2.8 }}
                        source={require('../../src/images/contact.png')} />
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
        </View>
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
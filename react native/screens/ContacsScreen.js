import React from "react";
import { TouchableOpacity, Linking, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import ContactCard from "../components/ContactCard";
import { linkToWhatsApp } from "../redux/actions/application_actions";

const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');

//скрин контакты
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
                <View style={{ backgroundColor: "white" }}>
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
                        {contacts.contacts.map(contact => <ContactCard item={contact} />)}
                    </View>
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
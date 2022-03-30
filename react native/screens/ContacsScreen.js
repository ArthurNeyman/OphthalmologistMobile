import React from "react";
import { ImageBackground, TouchableOpacity, Linking, View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-material-ui";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { linkToWhatsApp } from "../redux/actions/application_actions";

import { Dimensions } from 'react-native';

const RenderContact = ({ item }) => {
    return <TouchableOpacity
        style={{ paddingEnd: 10 }}
        onPress={() => {
            Linking.canOpenURL(`tel:'+7 3842${item.contact}`).then(supported => {
                if (supported) {
                    Linking.openURL(`tel:'+7 3842${item.contact}`);
                } else {
                    alert("Не могу открыть приложение вызовов")
                }
            });
        }}>
        <Card style={{ container: { paddingBottom: 10, paddingTop: 10, backgroundColor: "#27757f" } }}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <View style={{ flex: 8 }}>
                    <Text style={{ paddingStart: 15, fontSize: 20, color: "white", fontWeight: "bold" }}>{item.name}</Text>
                    <Text style={{ paddingStart: 15, fontSize: 16, fontWeight: "bold", color: "white" }}>(+7 3842) {item.contact}</Text>
                </View>
                <FontAwesomeIcon style={{ flex: 2 }} size={40} color={"white"} name="phone" />
            </View>
        </Card>
    </TouchableOpacity>
}

const ContactsScreen = (props) => {
    const contacts = props.route.params.contacts
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../../src/images/back.png')}>
            <View style={{position: "absolute"}}>
                <Image
                width={Dimensions.get('window').width}
                    source={require('../../src/images/contact.png')} />
            </View>
            <View style={{ flex: 1, width: "100%", heigth: "100%", paddingTop: 250 }}>
                <ScrollView
                    style={{ backgroundColor: "white", borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                    <View style={{ paddingTop: 40 }}>
                        <Text style={styles.boldText}>{contacts.mainContacts[0].name}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                        <Text style={{ ...styles.boldText, fontSize: 25 }}>{contacts.mainContacts[0].contact}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row",padding:5 }}>
                        <TouchableOpacity
                            onPress={() => { linkToWhatsApp(contacts.mainContacts[0].contact) }}
                            style={{ flex: 1, justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                            <Text style={{ fontSize: 20, color: "black", textAlign: "center", fontWeight: "bold" }}>Связаться через WhatsApp</Text>
                            <FontAwesomeIcon style={{ padding: 10 }} name="whatsapp" color={"#27757f"} size={70} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                Linking.canOpenURL(`tel:'${contacts.mainContacts[0].contact}`).then(supported => {
                                    if (supported) {
                                        Linking.openURL(`tel:'${contacts.mainContacts[0].contact}`);
                                    } else {
                                        alert("Не могу открыть приложение вызовов")
                                    }
                                });
                            }}
                            style={{ flex: 1, justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                            <Text style={{ fontSize: 20, color: "black", textAlign: "center", fontWeight: "bold" }}>Связаться по номеру телефона</Text>
                            <FontAwesomeIcon style={{ padding: 10 }} name="phone" color={"#27757f"} size={70} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={{ ...styles.boldText, paddingBottom: 15 }}>Другие контакты</Text>
                        {contacts.contacts.map(contact => <RenderContact item={contact} />)}
                    </View>
                </ScrollView>

            </View>
        </ImageBackground>
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
        fontSize: 25,
        padding: 5,
        fontWeight: "bold",
        textAlign: "center"
    }
});
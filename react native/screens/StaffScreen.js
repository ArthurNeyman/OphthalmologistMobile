import React from "react";
import { Text, View, StyleSheet, Image ,Dimensions} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FontistoIcon from "react-native-vector-icons/Fontisto"
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getStaff } from "../redux/actions/server_actions";
import { linkToWhatsApp } from "../redux/actions/application_actions";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import Loader from '../app_loader';
import { StatusBar } from 'react-native';
import { Card } from "react-native-material-ui";
import WebView from "react-native-webview";
//скрин сотрудника
const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');

export const StaffScreen = (props) => {

    const { staff, loadData, theme } = useSelector(state => state.data);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStaff(props.route.params.id));
    }, []);

    return (
        <>
            {
                loadData ? <Loader /> :
                    <View style={{ paddingTop: StatusBar.currentHeight,backgroundColor:"white"}}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1, padding: 20, flexDirection: "row", justifyContent: "center" }}>
                                    {
                                        staff.imgLink == null || staff.imgLink.length == 0 ?
                                            <FontistoIcon name="doctor" size={windowWidth*0.3} color={"#00ADA8"} /> :
                                            <Image source={{ uri: staff.imgLink }} style={styles.imageStyle} />
                                    }
                                </View>
                                <Text style={{ flex: 1, fontSize: 24, textAlign: "center", padding: 10, color: "black" }}>
                                    {staff.first_name + " " + staff.surname + " " + staff.last_name}
                                </Text >
                                <Text style={{ flex: 1, fontSize: 20, textAlign: "center", padding: 10, color: "black" }}>
                                    {staff.position}
                                </Text>
                                <Text style={{ flex: 1, fontSize: 20, textAlign: "center", color: "#00ADA8" }}>
                                    {staff.category != null ? staff.category : ""}
                                </Text>
                                <View style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                    padding: 3,
                                    margin: 5
                                }}></View>
                                <Text style={{ flex: 1, padding: 10, fontSize: 22, color: "black",textAlign:"justify"}}>
                                    {staff.description != null ? staff.description.replace("<br/>", "\n") : ""}
                                </Text>
                                {
                                    staff.phoneNumber != null && staff.phoneNumber.length != 0 ?
                                        <View>
                                            <Text style={{ flex: 1, padding: 5, fontSize: 20, color: "black", textAlign: "center" }}> Написать специалисту можно в чате WhatsApp
                                            </Text>
                                            <TouchableOpacity onPress={() => linkToWhatsApp(staff.phoneNumber)}>
                                                <Card style={{ container: { height: 80, backgroundColor: "#00ADA8" } }}>
                                                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
                                                        <Text style={{ flex: 5, padding: 10, fontSize: 35, color: "white", textAlign: "center" }}>{staff.phoneNumber}</Text>
                                                        <FontAwesomeIcon style={{ flex: 1,padding:5 }} name="whatsapp" color={"white"} size={60} />
                                                    </View>
                                                </Card>
                                            </TouchableOpacity>
                                        </View> :
                                        <></>
                                }
                            </View>
                            <View style={{height:50}}></View>
                        </ScrollView>
                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        resizeMode: 'stretch',
        margin: 10
    },
    headerStyle: {
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        margin: 10
    },
    newsDateStyle: {
        flex: 1,
        position: "absolute",
        margin: 10,
        right: 0,
        color: "black"
    }
});
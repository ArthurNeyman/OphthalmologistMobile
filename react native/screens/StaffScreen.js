import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FontistoIcon from "react-native-vector-icons/Fontisto"
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getStaff } from "../redux/actions/server_actions";
import { linkToWhatsApp } from "../redux/actions/application_actions";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"

export const StaffScreen = (props) => {

    const { staff, loadData, theme } = useSelector(state => state.data);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStaff(props.route.params.id));
    }, []);

    return (
        <ScrollView>
            {
                loadData ? <Loader /> :
                    <View style={{ flex: 1, flexDiraction: "column" }}>
                        <View style={{ flex: 1, padding: 20, flexDirection: "row", justifyContent: "center" }}>
                            <FontistoIcon name="doctor" size={130} color={"#00ADA8"} />
                        </View>
                        <Text style={{ flex: 1, fontSize: 30, textAlign: "center", padding: 10, color: "black" }}>
                            {staff.firstName + " " + staff.surname + " " + staff.lastName}
                        </Text >
                        <Text style={{ flex: 1, fontSize: 20, textAlign: "center", padding: 10 }}>
                            {staff.position}
                        </Text>
                        <Text style={{ flex: 1, fontSize: 20, textAlign: "center", color: "#00ADA8" }}>
                            {staff.category}
                        </Text>
                        <View style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            padding: 3,
                            margin: 10
                        }}></View>
                        <Text style={{ flex: 1, padding: 10, fontSize: 20, textAlign: "center", color: "black" }}>
                            {staff.info}
                        </Text>
                        {
                            staff.whatsAppContact != "" ?
                                <View>
                                    <Text style={{ flex: 1, padding: 10, fontSize: 20, color: "black" }}>
                                        Связаться со специалистом можно через WhatsApp по номеру :
                                    </Text>
                                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignContent: "center", padding: 10 }}>
                                        <Text style={{ flex: 6, padding: 10, fontSize: 30, color: "black", textAlign: "right", marginTop: 30 }}>{staff.whatsAppContact}</Text>
                                        <TouchableOpacity
                                            onPress={() => {linkToWhatsApp(staff.whatsAppContact)}}
                                            style={{ justifyContent: "flex-start" }}>
                                            <FontAwesomeIcon name="whatsapp" color={"#00ADA8"} size={70} />
                                        </TouchableOpacity>
                                        <View style={{ flex: 1 }}></View>
                                    </View>
                                </View> :
                                <></>
                        }

                    </View>
            }
        </ScrollView>
    )
}
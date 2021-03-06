import React from "react";
import { Text, View, StyleSheet ,Image} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import FontistoIcon from "react-native-vector-icons/Fontisto"
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getStaff } from "../redux/actions/server_actions";
import { linkToWhatsApp } from "../redux/actions/application_actions";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import Loader from '../app_loader';

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
                    <ScrollView>
                        <View style={{ flex: 1, flexDiraction: "column" }}>
                            <View style={{ flex: 1, padding: 20, flexDirection: "row", justifyContent: "center" }}>
                                {
                                    staff.imgLink == null ||  staff.imgLink.length == 0 ?
                                        <FontistoIcon name="doctor" size={100} color={"#00ADA8"} /> :
                                        <Image source={{ uri: staff.imgLink }} style={styles.imageStyle} />
                                }
                            </View>
                            <Text style={{ flex: 1, fontSize: 24, textAlign: "center", padding: 10, color: "black" }}>
                                {staff.first_name + " " + staff.surname + " " + staff.last_name}
                            </Text >
                            <Text style={{ flex: 1, fontSize: 20, textAlign: "center", padding: 10, color: "black" }}>
                                {staff.position}
                            </Text>
                            <Text style={{ flex: 1, fontSize: 20, textAlign: "center", color: "#00ADA8"}}>
                                {staff.category != null ? staff.category : ""}
                            </Text>
                            <View style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                padding: 3,
                                margin: 5
                            }}></View>
                            <Text style={{ flex: 1, padding: 20, fontSize: 20,  color: "black"}}>
                                {staff.description != null ? " \t "+staff.description.replace("<br/>","\n \t") : ""}
                            </Text>
                            {
                                staff.phoneNumber!=null &&  staff.phoneNumber.length != 0 ?
                                    <View>
                                        <Text style={{ flex: 1, padding: 20, fontSize: 20, color: "black" }}>    ?????????????????? ???? ???????????????????????? ?????????? ?????????? WhatsApp ???? ???????????? :
                                        </Text>
                                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignContent: "center", padding: 10 }}>
                                            <Text style={{ flex: 6, padding: 10, fontSize: 30, color: "black", textAlign: "right", marginTop: 30 }}>{staff.phoneNumber}</Text>
                                            <TouchableOpacity
                                                onPress={() => linkToWhatsApp(staff.phoneNumber)}
                                                style={{ justifyContent: "flex-start" }}>
                                                <FontAwesomeIcon name="whatsapp" color={"#00ADA8"} size={70} />
                                            </TouchableOpacity>
                                            <View style={{ flex: 1 }}></View>

                                        </View>
                                    </View> :
                                    <></>
                            }

                        </View>
                    </ScrollView>
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
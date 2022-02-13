import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FontistoIcon from "react-native-vector-icons/Fontisto"


// firstName: "Николай",
// lastName: "Хатминский",
// surname: "Юрьевич",

// position: "Заведующий отделением",
// category: "к.м.н., Врач высшей категории",
// info: 

export const StaffScreen = (props) => {

    const staff = props.route.params.staff;

    return (
        <ScrollView>
            <View style={{ flex: 1, flexDiraction: "column" }}>
                <View style={{ flex: 1, padding: 20, flexDirection: "row", justifyContent: "center"}}>
                    <FontistoIcon name="doctor" size={160} color={"#00ADA8"} />
                </View>
                <Text style={{ flex: 1, fontSize: 30, textAlign: "center", padding: 10, color:"black" }}>
                    {staff.firstName + " " + staff.surname + " " + staff.lastName}
                </Text >
                <Text style={{ flex: 1, fontSize: 20, textAlign: "center" , padding: 10}}>
                    {staff.position}
                </Text>
                <Text style={{ flex: 1, fontSize: 20, textAlign: "center", color: "#00ADA8" }}>
                    {staff.category}
                </Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    padding:3,
                    margin:10
                }}></View>
                <Text style={{ flex: 1, padding:10,fontSize: 20, textAlign: "center" }}>
                    {staff.info}
                </Text>
            </View>
        </ScrollView>
    )
}
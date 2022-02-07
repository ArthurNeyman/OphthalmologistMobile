import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
export const StaffScreen = (props) => {

    // console.log(props.route.params.staff);

    return (
        <ScrollView>
            <Text>
                Компонент в разработке.Информация о сотруднике. Возможно наличие фотографии или др.
            </Text>
        </ScrollView>
    )
}
import React from 'react';
import { StyleSheet } from "react-native"
import { BottomNavigation } from 'react-native-material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setScreen } from '../redux/actions/application_actions';

import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import FontistoIcon from "react-native-vector-icons/Fontisto"
import { useSelector, useDispatch } from 'react-redux'


const BottomMenuComponent = (props) => {
    
    const {activeScreen}=useSelector(state=>state.data)
    const dispatch = useDispatch()

    return (
        <BottomNavigation active={activeScreen}>
            <BottomNavigation.Action
                style={{
                    icon: { color: activeScreen == "Home" ? "#00ADA8" : "black" },
                    label: { color: activeScreen == "Home" ? "#00ADA8" : "black" },
                }}
                key="Home"
                icon={<SimpleLineIcon size={25} name="home" />}
                label="О нас"
                onPress={() => { dispatch(setScreen("Home")); props.navigation.navigate("Home") }}
            />
             {/* <BottomNavigation.Action
                style={{
                    icon: { color: activeScreen == "EFI" ? "#00ADA8" : "black" },
                    label: { color: activeScreen == "EFI" ? "#00ADA8" : "black" },
                }}
                key="EFI"
                icon={<FontistoIcon name="injection-syringe" size={25} />}
                label=""
                onPress={() => { dispatch(setScreen("EFI")); props.navigation.navigate("EFI") }}
            /> */}
            <BottomNavigation.Action
                style={{
                    icon: { color: activeScreen == "Service" ? "#00ADA8" : "black" },
                    label: { color: activeScreen == "Service" ? "#00ADA8" : "black" },
                }}
                key="Service"
                icon={<AntDesignIcon size={25} name="profile" />}
                label="Услуги"
                onPress={() => { dispatch(setScreen("Service")); props.navigation.navigate("Service") }}
            />
            <BottomNavigation.Action
                style={{
                    icon: { color: activeScreen == "Staff" ? "#00ADA8" : "black" },
                    label: { color: activeScreen == "Staff" ? "#00ADA8" : "black" },
                }}
                key="Doctors"
                icon={<MaterialIcon size={25} name="people-outline" />}
                label="Персонал"
                onPress={() => { dispatch(setScreen("Staff")); props.navigation.navigate("Staff") }}
            />
        </BottomNavigation>
    );
};

const styles = StyleSheet.create({
});

export default BottomMenuComponent;
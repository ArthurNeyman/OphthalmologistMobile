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

const BottomMenuComponent = (props) => {
    return (
        <BottomNavigation
            active={props.activeScreen}>
            <BottomNavigation.Action
                key="Home"
                icon={<SimpleLineIcon size={25} name="home" />}
                label="О нас"
                onPress={()=>{props.setScreen("Home"); props.navigation.navigate("Home")}}
            />
            <BottomNavigation.Action
                key="Service"
                icon={<AntDesignIcon size={25} name="profile" />}
                label="Услуги"
                onPress={() => { props.setScreen("Service"); props.navigation.navigate("Service") }}
            />
            <BottomNavigation.Action
                key="Doctors"
                icon={<MaterialIcon size={25} name="people-outline" />}
                label="Врачи"
                onPress={() => { props.setScreen("Doctors"); act = "Doctors"; props.navigation.navigate("Doctors") }}
            />
            <BottomNavigation.Action
                key="EFI"
                icon={<FontistoIcon name="injection-syringe" size={25} />}
                label="ЭФИ"
                onPress={() => { props.setScreen("EFI"); props.navigation.navigate("EFI") }}
            />
        </BottomNavigation>
    );
};

const styles = StyleSheet.create({

});

function mapTo(state) {
    return { activeScreen: state.data.activeScreen };
}

function matchTo(dispatch) {
    return bindActionCreators({ setScreen: setScreen }, dispatch)
}

export default connect(mapTo, matchTo)(BottomMenuComponent);
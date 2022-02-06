import React from 'react';
import { StyleSheet } from "react-native"

import { BottomNavigation } from 'react-native-material-ui';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
                onPress={()=>{ props.navigation.navigate("Home")}}
            />
            <BottomNavigation.Action
                key="ServiceListForCatagory"
                icon={<AntDesignIcon size={25} name="profile" />}
                label="Услуги"
                onPress={() => {props.navigation.navigate("Service") }}
            />
            <BottomNavigation.Action
                key="Doctors"
                icon={<MaterialIcon size={25} name="people-outline" />}
                label="Врачи"
                onPress={() => { props.navigation.navigate("Doctors") }}
            />
        
        </BottomNavigation>
    );
};

const styles = StyleSheet.create({

});

export default connect(mapTo, matchTo)(BottomMenuComponent;
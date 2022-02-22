import * as React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-material-ui';
import DropDownItem from 'react-native-drop-down-item';
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import FontistoIcon from "react-native-vector-icons/Fontisto"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'
import { GET_CLINIC_INFO, GET_SERVICE_CATEGORIES, GET_STAFF_LIST } from '../redux/actions/types';
import { setActiveScreen } from '../redux/actions/application_actions';

import { routes } from '../redux/actions/application_actions';

const DrawerMenuComponent = (props) => {
    const { activeScreen ,theme,user} = useSelector(state => state.data)
    const dispatch = useDispatch()

    const MyDrawerItem = (props) => {
        return <DrawerItem
            style={{ backgroundColor: activeScreen == props.route.viewName ? "rgba(0, 173, 168, 0.12)" : "white" }}
            labelStyle={styles.drawerLable}
            icon={() => { return <SimpleLineIcon size={25} color={theme.defaultMainColor} name={props.route.iconName} /> }}
            label={props.route.viewName}
            onPress={() => { props.navigation.navigate(props.route.routeName) }}
        />
    }
    return (
        <DrawerContentScrollView {...props}>

            <View style={{ padding: 15, flex: 1, flexDirection: 'row', alignItems: "center" }}>
                <Avatar style={{ flex: 1, alignItems: "center" }} icon="person" iconColor="#00ADA8" />
                <View style={{ flex: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>Меню</Text>
                    <UserName {...props} />
                </View>
            </View>

            <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />

            <View style={{ paddingTop: 3 }}>
                <View style={{ flex: 1 }}>
                    <DropDownItem
                        header={
                            <View style={{ ...styles.header, backgroundColor: activeScreen == GET_CLINIC_INFO ? "rgba(0, 173, 168, 0.12)" : "white" }} >
                                <SimpleLineIcon style={{ flex: 1, color: "#00ADA8", paddingStart: 3 }} size={25} name="home" />
                                <Text style={{ flex: 3.3, fontSize: 20, color: "black", fontFamily: "roboto" }} >Главная</Text>
                            </View>
                        }>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity style={{ flex: 1 }}
                                onPress={() => { props.navigation.navigate("NewsList") }}
                            >
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", flex: 1 }}>
                                    <FontAwesomeIcon style={{ paddingStart: 50 }} size={10} color={"#00ADA8"} name="circle" />
                                    <Text style={{ padding: 10, fontSize: 16 }}>Новости</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { dispatch(setActiveScreen(GET_CLINIC_INFO)); props.navigation.navigate("Home") }}
                                style={{ flex: 1 }}>
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", flex: 1 }}>
                                    <FontAwesomeIcon style={{ paddingStart: 50 }} size={10} color={"#00ADA8"} name="circle" />
                                    <Text style={{ padding: 10, fontSize: 16 }}>Об отделении</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1 }}
                                onPress={() => { dispatch(setActiveScreen(GET_CLINIC_INFO)); props.navigation.navigate("EyeTreatMethods") }}>
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", flex: 1 }}>
                                    <FontAwesomeIcon style={{ paddingStart: 50 }} size={10} color={"#00ADA8"} name="circle" />
                                    <Text style={{ padding: 10, fontSize: 16 }}>Методы лечения глаз</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1 }}
                                onPress={() => { dispatch(setActiveScreen(GET_CLINIC_INFO)); props.navigation.navigate("HowToSaveEyes") }}>
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", flex: 1 }}>
                                    <FontAwesomeIcon style={{ paddingStart: 50 }} size={10} color={"#00ADA8"} name="circle" />
                                    <Text style={{ padding: 10, fontSize: 16 }}>Как сохранить зрение</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </DropDownItem>
                </View>

                <MyDrawerItem route={routes["ServiceList"]} {...props}/>
                <MyDrawerItem route={routes["StaffList"]} {...props}/>

                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5, }} />
                
                {/* <Footer {...props} /> */}

            </View>

        </DrawerContentScrollView >
    )
}

function UserName(props) {
    if (props.user == null) return <Text>Гость</Text>
    else return <Text>{props.user.name}</Text>
}

function Footer(props) {

    if (props.user == null) {
        return <View>
            <DrawerItem style={styles.itemList}
                labelStyle={styles.drawerLable}

                icon={() => { return <FontAwesomeIcon size={25} color={"#00ADA8"} name="user-circle-o" /> }}
                label="Регистрация"
                onPress={() => { props.navigation.navigate("Doctors") }}
            />

            <DrawerItem style={styles.itemList}
                labelStyle={styles.drawerLable}

                icon={() => { return <AntDesignIcon size={25} color={"#00ADA8"} name="unlock" /> }}
                label="Авторизация"
                onPress={() => { props.navigation.navigate("Doctors") }}
            />
        </View>
    }
    else {
        return <View>

            <DropDownItem
                header={
                    <View style={styles.header}>
                        <SimpleLineIcon style={{ paddingStart: 3, flex: 1, color: "#00ADA8" }} size={25} name="calendar" />
                        <Text style={{ flex: 3.2, fontSize: 20, color: "black", fontFamily: "roboto" }}>Запись на услугу</Text>
                    </View>
                }
            >
                <Text>
                    <DrawerItem
                        labelStyle={styles.drawerInnerLable}
                        icon={() => { return <FontAwesomeIcon style={{ paddingStart: 30 }} size={10} color={"#00ADA8"} name="circle" /> }}
                        label="На прием"
                        onPress={() => { }}
                    />
                </Text>

                <Text>
                    <DrawerItem
                        labelStyle={styles.drawerInnerLable}
                        icon={() => { return <FontAwesomeIcon style={{ paddingStart: 30 }} size={10} color={"#00ADA8"} name="circle" /> }}
                        label="На операцию"
                        onPress={() => { }}
                    />
                </Text>
                <Text>
                    <DrawerItem
                        labelStyle={styles.drawerInnerLable}
                        icon={() => { return <FontAwesomeIcon style={{ paddingStart: 30 }} size={10} color={"#00ADA8"} name="circle" /> }}
                        label="На обследование"
                        onPress={() => { }}
                    />
                </Text>
            </DropDownItem>


            <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />

            <DrawerItem style={styles.itemList}
                labelStyle={styles.drawerLable}

                icon={() => { return <FontAwesomeIcon size={25} color={"#00ADA8"} name="user-circle-o" /> }}
                label="Профиль"
                onPress={() => { props.navigation.navigate("Doctors") }}
            />

            <DrawerItem style={styles.itemList}
                labelStyle={styles.drawerLable}

                icon={() => { return <MaterialIcon size={25} color={"#00ADA8"} name="logout" /> }}
                label="Выйти"
                onPress={() => { props.navigation.navigate("Doctors") }}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    drowItem: {
        width: "100%",
        backgroundColor: "red"
    },
    header: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 15,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center'
    },
    drawerLable: {
        fontSize: 20, width: "100%",
        color: "black",
        fontFamily: "roboto"
    },
    drawerInnerLable: {
        fontSize: 16,
        fontFamily: "roboto",
        color: "black"
    }
});

export default DrawerMenuComponent;

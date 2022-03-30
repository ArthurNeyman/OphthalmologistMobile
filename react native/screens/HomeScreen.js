import React, { useEffect } from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet, ImageBackground,StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons"

import { ScrollView } from 'react-native-gesture-handler';
import { setActiveScreen, routes } from '../redux/actions/application_actions';
import { getClinicInfo } from "../redux/actions/server_actions"
import Loader from '../app_loader';

const Button = ({ iconName, onPress, text }) => {
  return <>
    <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
      <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        onPress={() => onPress()}>
        <SimpleLineIcon style={{ flex: 1 }} name={iconName} size={50} color={"#27757f"} />
        <Text style={{ flex: 1, fontSize: 20, color: "black", textAlign: "center" }}>{text}</Text>
      </TouchableOpacity>
    </View>
  </>
}
const HomeScreen = (props) => {

  const { clinic_info, loadData, theme } = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getClinicInfo())
    // props.navigation.addListener("focus", () => dispatch(setActiveScreen(props.route.name)))
  }, []);

  return (
    <>
      {
        loadData ? <Loader /> :
          <ImageBackground style={{ flex: 1 }} source={require('../../src/images/back.png')}>
            <View style={{ flex: 1, width: "100%", heigth: "100%", paddingTop: 200 }}>
              <View style={{ position: "absolute", paddingTop: 35, width: "100%" }}>
                <Text style={{ fontSize: 25, color: "white", textAlign: "center", padding: 5 }}>{clinic_info.name}</Text>
              </View>
              <ScrollView style={{ backgroundColor: "white", borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                <View style={{ flex: 1, alignItems: "center" }} >
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Image
                      resizeMode="contain"
                      style={{ flex: 1, height: 250 }}
                      source={require('../../src/images/services_main_icon.png')} />
                  </View>
                  <Text style={{ flex: 1, fontSize: 22, padding: 10, color: "#27757f", textAlign: "center" ,fontWeight:"bold"}}>
                    {clinic_info.shortDescription}
                  </Text>
                </View>
                <View style={{ paddingTop: 5 }}>
                  <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Button text={"Услуги"} iconName={"list"} onPress={() => props.navigation.navigate("ServiceList")} />
                    <Button text={"Сотрудники"} iconName={"people"} onPress={() => props.navigation.navigate("StaffList")} />
                    <Button text={"Новости"} iconName={"event"} onPress={() => props.navigation.navigate("NewsList")} />
                  </View>
                  <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Button text={"Как добраться"} iconName={"directions"} onPress={() => props.navigation.navigate("Route", { adddressInfo: clinic_info.address })} />
                    <Button text={"Контакты"} iconName={"phone"} onPress={() => props.navigation.navigate("Contacts", { contacts: clinic_info.contacts })} />
                    <Button text={"Вопрос/Ответ"} iconName={"bubbles"} onPress={() => props.navigation.navigate("QuastionsAndAnswers")} />
                  </View>
                </View>
              </ScrollView>
            </View>
          </ImageBackground>
      }
    </>
  );
};


const styles = StyleSheet.create({
  simpleText: {
    color: "#243329",
    fontSize: 20,
    padding: 5,
    textAlign: "center"
  },
  boldText: {
    color: "#243329",
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default HomeScreen;
import React, { useEffect } from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { ScrollView } from 'react-native-gesture-handler';
import { setActiveScreen, routes } from '../redux/actions/application_actions';
import { getClinicInfo } from "../redux/actions/server_actions"
import { Card } from 'react-native-material-ui';
import Loader from '../app_loader';

//скрин домашняя
const HomeScreen = (props) => {

  const { clinic_info, loadData, theme } = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getClinicInfo())
    props.navigation.addListener("focus", () => dispatch(setActiveScreen(props.route.name)))
  }, []);

  return (
    <>
      {
        loadData ? <Loader /> :
          <ScrollView>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Image
                style={{ width: "100%" }}
                source={require('../../src/images/HomePageImage1.png')} />
              <View style={{ position: "absolute", justifyContent: "center", alignItems: "center", paddingTop: 30 }}>
                <Text style={{ fontSize: 30, color: "white", textAlign: "center", padding: 5, fontWeight: "bold", textShadowRadius: 5, textShadowColor: "black" }}>{clinic_info.name}</Text>
              </View>
            </View>
            <View style={{ padding: 10 }} >
              <Text style={{ fontSize: 25, color: "black", textAlign: "center" }}>
                {clinic_info.shortDescription}
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity style={{ flex: 1 }}
                onPress={() => { props.navigation.navigate("ServiceList") }}>
                <Card>
                  <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
                    {routes["ServiceList"].icon()}
                    <Text style={{ fontSize: 22, color: theme.currentMainColor }}>Услуги</Text>
                  </View>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1 }}
                onPress={() => { props.navigation.navigate("StaffList"); }}>
                <Card>
                  <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
                    {routes["StaffList"].icon()}
                    <Text style={{ fontSize: 22, color: theme.currentMainColor }}>Сотрудники</Text>
                  </View>
                </Card>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>

              <TouchableOpacity style={{ flex: 1 }}
                onPress={() => props.navigation.navigate("QuastionsAndAnswers")}>
                <Card>
                  <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
                    <FontAwesomeIcon name="question-circle" size={30} color={theme.currentMainColor} />
                    <Text style={{ fontSize: 22, color: theme.currentMainColor }}>Вопрос / ответ</Text>
                  </View>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1 }}
                onPress={() => props.navigation.navigate("Route", { adddressInfo: clinic_info.address })}>
                <Card>
                  <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
                    <FontAwesomeIcon name="map" size={30} color={theme.currentMainColor} />
                    <Text style={{ fontSize: 22, color: theme.currentMainColor }}>Как добраться</Text>
                  </View>
                </Card>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity style={{ flex: 1 }}
                onPress={() => props.navigation.navigate("Contacts", { contacts: clinic_info.contacts })}>
                <Card>
                  <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
                    <FontAwesomeIcon name="phone" size={30} color={theme.currentMainColor} />
                    <Text style={{ fontSize: 22, color: theme.currentMainColor }}>Контакты</Text>
                  </View>
                </Card>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
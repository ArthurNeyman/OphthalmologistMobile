import React from 'react';
import { Linking, TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { setActiveScreen } from '../redux/actions/application_actions';
import { getClinicInfo } from "../redux/actions/server_actions"
import { GET_STAFF_LIST,GET_SERVICE_CATEGORIES } from '../redux/actions/types';
export const textColor = "#243329";

import { useSelector, useDispatch } from 'react-redux'

import { Card } from 'react-native-material-ui';

const HomeScreen = (props) => {

  const { clinic_info, loadData, theme } = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getClinicInfo());
  }, []);

  return (
    <ScrollView>
      <View>
        <Image
          style={{ width: "100%" }}
          source={require('../../src/images/HomePageImage.png')} />
      </View>

      <View style={{ paddingTop: 15 }}>
        <Text style={styles.boldText}>{clinic_info.name}</Text>
      </View>

      <View style={{ padding: 10 }} >
        <Text style={{ fontSize: 20, textAlign: "center" }}>
       {clinic_info.shortDescription}
        </Text>
      </View>

      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity style={{ flex: 1 }}
          onPress={() => {dispatch(setActiveScreen(GET_SERVICE_CATEGORIES));props.navigation.navigate("ServiceList")}}>
          <Card>
            <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
              <AntDesignIcon size={25} size={30} color={theme.currentMainColor} name="profile" />
              <Text style={{ fontSize: 22, color: theme.currentMainColor }}>Услуги</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1 }}
          onPress={() => {dispatch(setActiveScreen(GET_STAFF_LIST));props.navigation.navigate("StaffList");}}>
          <Card>
            <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
              <MaterialIcon size={30} color={theme.currentMainColor} name="people-outline" />
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
          onPress={() => props.navigation.navigate("Aboute")}>

          <Card>
            <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
              <FontAwesomeIcon name="building-o" size={30} color={theme.currentMainColor} />
              <Text style={{ fontSize: 22, color: theme.currentMainColor }}>Об отделении</Text>
            </View>
          </Card>

        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>


        <TouchableOpacity style={{ flex: 1 }}
          onPress={() => props.navigation.navigate("Route", { adddressInfo: clinic_info.address })}>
          <Card>
            <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
              <FontAwesomeIcon name="map" size={30} color={theme.currentMainColor} />
              <Text style={{ fontSize: 22, color: theme.currentMainColor }}>Как добраться</Text>
            </View>
          </Card>
        </TouchableOpacity>

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
  );
};

const styles = StyleSheet.create({
  simpleText: {
    color: textColor,
    fontSize: 20,
    padding: 5,
    textAlign: "center"
  },
  boldText: {
    color: textColor,
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default HomeScreen;
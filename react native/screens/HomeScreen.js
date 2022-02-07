import React from 'react';
import { Linking, TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react';

import {getClinicInfo} from "../redux/actions/server_actions"

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

      <View style={{ padding: 10}} >
        <Text style={{fontSize:20,textAlign:"center" }}>
          Описание отделения. Тут отображается основная инофрмация об отделении.
        </Text>
      </View>

      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>

        <TouchableOpacity style={{ flex: 1}}
                onPress={()=>props.navigation.navigate("Route",{adddressInfo:clinic_info.address})}>
          <Card>
            <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
              <FontAwesomeIcon name="map-marker" size={40} color={theme.currentMainColor} />
              <Text style={{ fontSize: 22, color: theme.currentMainColor }}>Как добраться</Text>
            </View>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1 }}
        onPress={()=>props.navigation.navigate("Contacts",{contacts:clinic_info.contacts})}>

          <Card>
            <View style={{ flex: 1, padding: 5, alignItems: 'center' }}>
              <FontAwesomeIcon name="phone" size={40} color={theme.currentMainColor} />
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
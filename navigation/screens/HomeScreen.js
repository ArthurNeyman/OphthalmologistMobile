import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { get_clinic_info } from '../../redux/actions/server_actions';

import { Linking, TouchableOpacity, Text, View, Image, StyleSheet, FlatList } from 'react-native';

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = (props) => {


  const useLayoutEffect=()=>{
    console.log("Home hi");
  }
  
  const renderContact = ({ item }) => {
    return <View style={{ paddingBottom: 15, flex: 1, flexDirection: "row", alignItems: "center" }}>
      {/* <FontAwesomeIcon style={{paddingStart:10, flex:1}}size={10} color={"#00ADA8"} name="circle" /> */}
      <Text style={{ paddingStart: 30, flex: 3, fontSize: 18, fontWeight: "bold" }}>{item.contact}</Text>
      <Text style={{ flex: 6, fontSize: 18 }}>{item.name}</Text>
      <TouchableOpacity
        style={{ paddingEnd: 20 }}
        onPress={() => {
          Linking.canOpenURL(`tel:'+7 3842${item.contact}`).then(supported => {
            if (supported) {
              Linking.openURL(`tel:'+7 3842${item.contact}`);
            } else {
              alert("не могу открыть приложение вызовов")
            }
          });
        }}
      >
        <FontAwesomeIcon size={25} color={"#00ADA8"} name="phone" />
      </TouchableOpacity>
    </View>
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        style={{ width: "100%" }}
        source={require('../../src/images/HomePageImage.png')} />
      <Text style={{ fontSize: 20, padding: 5, fontWeight: "bold", textAlign: "center" }}>{props.clinic_info.name}</Text>
      <Text style={{ fontSize: 20, padding: 5, textAlign: "center" }}>{props.clinic_info.mainContact.name}</Text>

      <TouchableOpacity
        onPress={() => {
          Linking.canOpenURL("whatsapp://send?phone=" + props.clinic_info.mainContact.contact).then(supported => {
            if (supported) {
              Linking.openURL("whatsapp://send?phone=" + props.clinic_info.mainContact.contact + "&text=Здравствуйте,Николай Юрьевич!");
            } else {

            }
          });
        }}
        style={{ justifyContent: "center", flexDirection: "row", alignItems: "center", padding: 0 }}>
        <FontAwesomeIcon style={{ padding: 20 }} name="whatsapp" color={"#00ADA8"} size={50} />
        <Text style={{ fontSize: 25 }}>{props.clinic_info.mainContact.contact}</Text>
      </TouchableOpacity>

      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>Контакты:</Text>
        <FlatList
          data={props.clinic_info.contacts}
          renderItem={renderContact}
        />
      </View>

      <View style={{ paddingBottom: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}> Адрес:</Text>
        <View style={{ flex: 1, flexDirection: "row", paddingRight: 10 }}>
          <Text style={{ flex: 9, paddingLeft: 15, textAlign: "center", fontSize: 18, fontWeight: "bold" }} >{props.clinic_info.adress}</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.canOpenURL('google.navigation:q=' + props.clinic_info.adress).then(supported => {
                if (supported) {
                  Linking.openURL('google.navigation:q=' + props.clinic_info.adress);
                } else {
                }
              });
            }}>
            <FontAwesomeIcon style={{ flex: 1, paddingRight: 10 }} size={25} color={"#00ADA8"} name="map" />
          </TouchableOpacity>

        </View>
      </View>

    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    clinic_info: state.data.clinic_info
  }
}

function matchTo(dispatch) {
  return bindActionCreators({ get_clinic_info: get_clinic_info }, dispatch)
}

export default connect(mapStateToProps, matchTo)(HomeScreen);
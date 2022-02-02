import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Linking, TouchableOpacity, Text, View, Image, StyleSheet, FlatList } from 'react-native';

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { ScrollView } from 'react-native-gesture-handler';

import { Card } from "react-native-material-ui"

export const textColor = "#243329";

const HomeScreen = (props) => {

  const renderContact = ({ item }) => {
    return <View style={{ paddingBottom: 15, flex: 1, flexDirection: "row", alignItems: "center" }}>
      {/* <FontAwesomeIcon style={{paddingStart:10, flex:1}}size={10} color={"#00ADA8"} name="circle" /> */}
      <Text style={{ paddingStart: 15, paddingEnd: 15, flex: 2, fontSize: 16, color: textColor, fontWeight: "bold" }}>{item.name}</Text>
      <Text style={{ paddingStart: 15, paddingEnd: 15, flex: 3, fontSize: 18, fontWeight: "bold", color: textColor }}>(+7 3842) {item.contact}</Text>
      {/* <TouchableOpacity
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
      </TouchableOpacity> */}
    </View>
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        style={{ width: "100%" }}
        source={require('../../src/images/HomePageImage.png')} />
      <View style={{ paddingTop: 15 }}>
        <Text style={styles.boldText}>{props.clinic_info.name}</Text>
        <Text style={styles.boldText}>{props.clinic_info.mainContact.name}</Text>
      </View>
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
        <FontAwesomeIcon style={{ padding: 15 }} name="whatsapp" color={"#00ADA8"} size={50} />
        <Text style={{ ...styles.boldText, fontSize: 25 }}>{props.clinic_info.mainContact.contact}</Text>
      </TouchableOpacity>

      <View >
        <Text style={{ ...styles.boldText, paddingBottom: 15 }}>Контакты</Text>
        <FlatList
          data={props.clinic_info.contacts}
          renderItem={renderContact}
        />
      </View>

      <View style={{ paddingBottom: 30 }}>
        <Text style={styles.boldText}> Адрес</Text>
        <View>
          <Text style={styles.boldText} >{props.clinic_info.adress}</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.canOpenURL('google.navigation:q=' + props.clinic_info.adress).then(supported => {
                if (supported) {
                  Linking.openURL('google.navigation:q=' + props.clinic_info.adress);
                } else {
                }
              });
            }}>
            {/* <FontAwesomeIcon style={{ flex: 1, paddingRight: 10 }} size={25} color={"#00ADA8"} name="map" /> */}
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
  return bindActionCreators({}, dispatch)
}

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

export default connect(mapStateToProps, matchTo)(HomeScreen);
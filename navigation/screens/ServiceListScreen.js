import React from 'react';

import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-material-ui';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ServiceListScreen = (props) => {

  return (
    <ScrollView>
      <View>
        <View style={{ padding: 10 }}>
          <ServiceCard {...props.serviceList[0]} />
          <ServiceCard {...props.serviceList[1]} />
          <ServiceCard {...props.serviceList[2]} />
        </View>
      </View>
    </ScrollView>
  );
};

function GetImage({ num }) {
  if (num == 1) return <Image source={require("../../src/images/EyeService.png")} />
  else if (num == 2) return <Image source={require("../../src/images/OperatingTableService.png")} />
  else if (num == 3) return <Image source={require("../../src/images/MedicineService.png")} />
  else return <Image source={require("../../src/images/EyeService.png")} />
}

function ServiceCard(service) {
  return <Card >
    <View style={{ height: 130, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
      <View style={{ alignItems: "center", flex: 2 }}>
        <GetImage num={service.num} />
        {/* <Image
          source={require("../../src/images/EyeService.png")} /> */}
      </View>
      <View style={{ flex: 5 }}>
        <View>
          <Text style={{ paddingTop: 30, paddingEnd: 15, color: "black", fontSize: 20 }}>{service.name}</Text>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 20 }}>
          <TouchableOpacity style={{ flex: 1, textAlign: "center",paddingHorizontal:2 }}>
            <Text style={{ color: "#00ADA8" ,fontSize:14,fontWeight:"bold"}} >ЗАДАТЬ ВОПРОС</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, textAlign: "center", fontSize: 10,paddingHorizontal:2 }}>
            <Text style={{ color: "#00ADA8" ,fontSize:14,fontWeight:"bold"}}>ПОДРОБНЕЕ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Card>
}

const mapStateToProps = state => {
  return {
    serviceList: state.data.serviceList
  }
}

function matchTo(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, matchTo)(ServiceListScreen);
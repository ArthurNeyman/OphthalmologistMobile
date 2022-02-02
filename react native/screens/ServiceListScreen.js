import React from 'react';

import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-material-ui';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ServiceListScreen = (props) => {

  let serviceList=props.serviceList;

  return (
    <ScrollView>
      <View>
        <View style={{ padding: 10 }}>
          <ServiceCard service={serviceList[0]} 
          ask={()=>props.navigation.navigate("AskQuestion")}
          more={()=>props.navigation.navigate("SomeService")}
          />
          <ServiceCard service={serviceList[1]} 
          ask={()=>props.navigation.navigate("AskQuestion")}
          more={()=>props.navigation.navigate("SomeService")}
          />
          <ServiceCard service={serviceList[2]} 
          ask={()=>props.navigation.navigate("AskQuestion")}
          more={()=>props.navigation.navigate("SomeService")}
          />
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

function ServiceCard(props) {
  console.log("Sprops",props)
  return <Card >
    <View style={{ height: 130, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
      <View style={{ alignItems: "center", flex: 2 }}>
        <GetImage num={props.service.num} />
      </View>
      <View style={{ flex: 5 }}>
        <View>
          <Text style={{ paddingTop: 30, paddingEnd: 15, color: "black", fontSize: 20 }}>{props.service.name}</Text>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 10, paddingBottom: 20 }}>
          <TouchableOpacity style={{ flex: 1, textAlign: "center",paddingHorizontal:2 }}
          onPress={()=>props.ask()}>
            <Text style={{ color: "#00ADA8" ,fontSize:13,fontWeight:"bold"}} >ЗАДАТЬ ВОПРОС</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, textAlign: "center", fontSize: 10,paddingHorizontal:2 }}
           onPress={()=>props.more()}>
            <Text style={{ color: "#00ADA8" ,fontSize:13,fontWeight:"bold"}}>ПОДРОБНЕЕ</Text>
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
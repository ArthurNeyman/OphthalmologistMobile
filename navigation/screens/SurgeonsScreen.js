import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-material-ui';

import { Avatar } from 'react-native-material-ui';
import FontistoIcon from "react-native-vector-icons/Fontisto"

const SurgeonsScreen = (props) => {
  return (
    <ScrollView style={{margin:15,marginTop:20}}>
      {/* {
        props.surgeonsList.map((data)=>{
          return <View><Text>{data.firstName}</Text></View>
        })
      } */}
      <FlatList
        data={props.surgeonsList}
        renderItem={SurgeonsCard}
      />
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    surgeonsList: state.data.surgeonsList
  }
}

function matchTo(dispatch) {
  return bindActionCreators({}, dispatch)
}

const SurgeonsCard = ({ item },openAsk,openSchedule) => {
  return (
    <View style={{paddingTop:10,paddingBottom:10,}}>
    <Card >
      <View style={{ minHeight:130,maxHeight:200, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
        <View style={{ alignItems: "center", flex: 2 }}>
        <FontistoIcon name="doctor" size={80} color={"#00ADA8"} />
        </View>
        <View style={{ flex: 5 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{flex: 1, color: "black", fontSize: 18, paddingTop: 10,paddingBottom:3 }}>{item.lastName + " " + item.firstName + " " + item.surname}</Text>
            <View style={{padding: 10, alignItems: "center" }}>
            <TouchableOpacity
                        onPress={()=>{alert("Компонент  ПРОФИЛЬ ВРАЧА в разработке.Какие данные нужно отображать?")}}>
              <Avatar style={{container:{backgroundColor:"white",paddingTop:10}}} size={30} icon="person" iconColor="#00ADA8" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{color: "black", fontSize: 15, paddingTop: 0 }}>{item.position}</Text>
          <View style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 20 }}>
            <TouchableOpacity style={{ flex: 1, textAlign: "center", paddingHorizontal: 2 }}
            onPress={()=>{alert("Компонент  ЗАДАТЬ ВОПРОС ВРАЧУ в разработке. Как должен срабатывать?")}}>
              <Text style={{ color: "#00ADA8", fontSize: 13, fontWeight: "bold" }} >ЗАДАТЬ ВОПРОС</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, textAlign: "center", fontSize: 10, paddingHorizontal: 2 }}
            onPress={()=>{alert("Что должно происходить при нажатии на РАПИСАНИЕ ВРАЧА?")}}>
              <Text style={{ color: "#00ADA8", fontSize: 13, fontWeight: "bold" }}>РАСПИСАНИЕ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
    </View>
  );
}

export default connect(mapStateToProps, matchTo)(SurgeonsScreen);
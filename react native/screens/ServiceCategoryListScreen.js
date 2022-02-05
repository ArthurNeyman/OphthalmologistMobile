import React from 'react';

import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-material-ui';
import { useSelector, useDispatch } from 'react-redux'
import { getServiceCatagories, gerServiceListByCatagory } from '../redux/actions/server_actions';
import { useState, useEffect } from 'react';
import Loader from '../app_loader';

const ServiceCatagoryListScreen = (props) => {

  const { categoryServiceList, loadData } = useSelector(state => state.data)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getServiceCatagories());
  }, []);
  return (
    <ScrollView>
      {
        loadData ? <Loader />
          :
          <View style={{ padding: 5 }}>
            {
              categoryServiceList.map(el => {
                return <CategoryServiceCard category={el} />
              })
            }
          </View>
      }
    </ScrollView>
  );
};
function GetImage({ num }) {
  if (num == 0) return <Image source={require("../../src/images/investigation.png")} />
  else if (num == 1) return <Image source={require("../../src/images/OperatingTableService.png")} />
  else if (num == 2) return <Image source={require("../../src/images/MedicineService.png")} />
  else return <Image source={require("../../src/images/EyeService.png")} />
}
function gerAlertMessage(num) {
  console.log(num);
  if (num == 0) return "Тут будут описаны Эфи о ОКТ"
  else if (num == 1) return "Тут будут операции"
  else if (num == 2) return "Информация об медикаментохном лечении"
}
function CategoryServiceCard(props) {

  const {serviceList} = useSelector(state=>state.data)

  const category = props.category;
  const dispatch = useDispatch()

  return <Card >
    <View style={{ height: 130, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
      <View style={{ alignItems: "center", flex: 2 }}>
        <GetImage num={category.id} />
      </View>
      <View style={{ flex: 5 }}>
        <View>
          <Text style={{ paddingTop: 30, paddingEnd: 15, color: "black", fontSize: 20 }}>{category.name}</Text>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 10, paddingBottom: 20 }}>
          <TouchableOpacity style={{ flex: 1, textAlign: "center", paddingHorizontal: 2 }}
            onPress={() => alert("Компонент в разработке")}>
            <Text style={{ color: "#00ADA8", fontSize: 13, fontWeight: "bold" }} >ЗАДАТЬ ВОПРОС</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, textAlign: "center", fontSize: 10, paddingHorizontal: 2 }}
            onPress={() =>  { dispatch(gerServiceListByCatagory(category.id));console.log(serviceList);}}>
            <Text style={{ color: "#00ADA8", fontSize: 13, fontWeight: "bold" }}>ПОДРОБНЕЕ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Card>
}

export default ServiceCatagoryListScreen;
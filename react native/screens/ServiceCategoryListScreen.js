import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'
import { getServiceCatagories, gerServiceListByCatagory } from '../redux/actions/server_actions';
import { useState, useEffect } from 'react';
import Loader from '../app_loader';

import CardComponent  from "../components/CardComponent"

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
                return <CardComponent  id={el.id} name={el.name}  toAsck={()=>{alert("В разработке")}} toNavigate={()=>props.navigation.navigate("ServiceList",{categoryId:el.id})}/>
              })
            }
          </View>
      }
    </ScrollView>
  );
};

export default ServiceCatagoryListScreen;
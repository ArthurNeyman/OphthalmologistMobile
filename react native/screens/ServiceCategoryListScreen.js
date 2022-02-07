import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'
import { gerServiceListByCatagoryId, getServiceCatagories, gerServiceListByCatagory, getServiceVategoriesByParentCategoryId } from '../redux/actions/server_actions';
import { useState, useEffect } from 'react';
import Loader from '../app_loader';

import CardComponent from "../components/CardComponent"

const ServiceCatagoryListScreen = (props) => {

  const { categoryServiceList, serviceList, loadData } = useSelector(state => state.data)
  const dispatch = useDispatch()
  const parentId = props.route.params ? props.route.params.parentId ? props.route.params.parentId : null : null

  useEffect(() => {
    dispatch(getServiceVategoriesByParentCategoryId(parentId));
    if (!parentId) dispatch(gerServiceListByCatagoryId(null))
  }, []);
  
  return (
    <ScrollView>
      {
        loadData ? <Loader />
          :
          <View style={{ padding: 5 }}>
            {
              parentId == null ? serviceList.map(el => {
                return <CardComponent
                  id={el.id}
                  name={el.name}
                  toAsck={() => alert("В разработке")}
                  toNavigate={() => props.navigation.navigate("Service", { serviceId: el.id })}
                />
              }
              )
                : <></>
            }
            {
              categoryServiceList.map(el => {
                return <CardComponent
                  id={el.id}
                  name={el.name}
                  toAsck={() => alert("В разработке")}
                  toNavigate={() => {
                    if (el.hasChildren) {
                      props.navigation.push("ServiceCatagoryList", { parentId: el.id })
                    }
                    else {
                      props.navigation.navigate("ServiceList", { categoryId: el.id })
                    }
                  }
                  }
                />
              })
            }
          </View>
      }
    </ScrollView>
  );
};

export default ServiceCatagoryListScreen;
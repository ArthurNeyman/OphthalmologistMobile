import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View,StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

import { getStaffList } from '../redux/actions/server_actions';
import Loader from '../app_loader';
import { useEffect } from 'react';
import { setActiveScreen } from '../redux/actions/application_actions';
import StaffCard from '../components/StaffCard';
import { StatusBar } from 'react-native';

//скрин список сотрудников
const StaffListScreen = (props) => {

  const { staffList, loadData,theme } = useSelector(state => state.data);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStaffList());
    props.navigation.addListener("focus", () => dispatch(setActiveScreen(props.route.name)))
    return props.navigation.removeListener();
  }, []);

  return (
    <>
      {
        loadData ? <Loader /> : 
        <View style={{paddingTop:StatusBar.currentHeight}}>
        <ScrollView 
        showsVerticalScrollIndicator={false}>
          {
            staffList.map(el => {
              return <StaffCard staff={el} navigateProfile={() => props.navigation.navigate("Staff", { id: el.id })} />
            })
          }
        </ScrollView>
        </View>
      }
    </>
  );
};

export default StaffListScreen;

const styles = StyleSheet.create({

})
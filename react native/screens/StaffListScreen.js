import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-material-ui';
import FontistoIcon from "react-native-vector-icons/Fontisto"
import { getStaffList } from '../redux/actions/server_actions';
import Loader from '../app_loader';
import { useEffect } from 'react';
import { setActiveScreen } from '../redux/actions/application_actions';


const StaffCard = ({ staff, navigateProfile }) => {

  const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');

  return (
    <View style={{ paddingTop: 5, paddingBottom: 5, }}>
      <TouchableOpacity
        onPress={() => { navigateProfile() }}>
        <Card >
          <View style={{ minHeight: windowsHeight * 0.15, minHeight: windowsHeight * 0.10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1, padding: 5 }}>
            <View style={{ alignItems: "center", flex: 2 }}>
              <FontistoIcon name="doctor" size={80} color={"#00ADA8"} />
            </View>
            <View style={{ flex: 5, justifyContent: "center", alignContent: "center", padding: 5 }}>
              <Text style={{ color: "black", fontSize: 22, paddingTop: 10, paddingBottom: 3 }}>{staff.last_name + " " + staff.first_name + " " + staff.surname}</Text>
              <Text style={{ color: "black", fontSize: 18, paddingTop: 0 }}>{staff.position}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const StaffListScreen = (props) => {

  const { staffList, loadData } = useSelector(state => state.data);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStaffList());
    props.navigation.addListener("focus", () => dispatch(setActiveScreen(props.route.name)))
    return props.navigation.removeListener();
  }, []);

  return (
    <>
      {
        loadData ? <Loader /> : <ScrollView style={{ margin: 15 }}>
          {
            staffList.map(el => {
              return <StaffCard staff={el} navigateProfile={() => props.navigation.navigate("Staff", { id: el.id })} />
            })
          }
        </ScrollView>
      }
    </>
  );
};

export default StaffListScreen;
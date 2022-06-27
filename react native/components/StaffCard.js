
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Card } from 'react-native-material-ui';
import FontistoIcon from "react-native-vector-icons/Fontisto"
import { useSelector } from 'react-redux';
//карточка сотрудника в списке
const StaffCard = ({ staff, navigateProfile }) => {

    const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');
    const {theme } = useSelector(state => state.data)

    return (
      <View style={{ paddingTop: 5, paddingBottom: 5, }}>
        <TouchableOpacity
          onPress={() => { navigateProfile() }}>
          <Card style={{container:{borderRadius:1,borderColor:theme.currentMainColor,borderWidth:2}}}>
            <View style={{ height: windowsHeight * 0.15, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1, padding: 3}}>
              <View style={{ alignItems: "center", flex: 2 }}>
                <FontistoIcon name="doctor" size={80} color={theme.currentMainColor} />
              </View>
              <View style={{ flex: 5, justifyContent: "center", alignContent: "center", padding: 5 }}>
                <Text style={{ color: "black", fontSize: 20, paddingTop: 10, paddingBottom: 3 }}>{staff.last_name + " " + staff.first_name + " " + staff.surname}</Text>
                <Text style={{ color: theme.currentMainColor, fontSize: 18 }}>{staff.position}</Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }

  export default StaffCard;
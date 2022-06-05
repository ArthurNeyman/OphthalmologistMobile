
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

//карточка сотрудника в списке
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

  export default StaffCard;
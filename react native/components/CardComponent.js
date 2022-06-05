import React from 'react';
import { View, Text, Dimensions,StyleSheet } from "react-native";
import { Card } from 'react-native-material-ui';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { useSelector } from 'react-redux';

const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');


//компонент карточки услуги в списке услуг
const CardComponent = ({ name, toNavigate }) => {
    const { theme } = useSelector(state => state.data)

    return (
        <Card onPress={() => toNavigate()}>
            <View style={{ height:100,padding:10,minHeight:windowsHeight*0.1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1 }}>
            <FontAwesomeIcon  style={{padding:5}}size={55} color={theme.currentMainColor} name="angle-left" />
                <View style={{ padding:5,flex: 5,flexDirection: "row",justifyContent:"center",alignContent:"center" }}>
                    <Text style={styles.cardText}>{name}</Text>
                </View>
                <FontAwesomeIcon style={{padding:5}} size={55} color={theme.currentMainColor} name="angle-right" />
            </View>
        </Card>
    )
}
export default CardComponent;

const styles = StyleSheet.create({
    cardText:{
        flex:1,
        color: "black", 
        fontSize: 20,
        textAlign:"center"
    }
})
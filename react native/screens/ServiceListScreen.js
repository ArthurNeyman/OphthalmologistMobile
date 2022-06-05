import React from 'react';
import { View, StyleSheet } from "react-native";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getServiceList } from "../redux/actions/server_actions"
import Loader from '../app_loader';
import CardComponent from '../components/CardComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { setActiveScreen } from '../redux/actions/application_actions';
import { StatusBar } from 'react-native';

//скрин списка услуг
const ServiceListScreen = (props) => {

    const { serviceList, loadData } = useSelector(state => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getServiceList());
        props.navigation.addListener("focus", () => dispatch(setActiveScreen(props.route.name)))
    }, []);

    return (
        <>
            {loadData ? <Loader /> :
            <View style={{paddingTop:StatusBar.currentHeight}}>
                <ScrollView
                 showsVerticalScrollIndicator={false} >
                    <View style={{ padding: 5 }}>
                        {
                            serviceList.map(el => {
                                return <CardComponent
                                    name={el.name}
                                    toNavigate={() => props.navigation.navigate("Service", { id: el.id })}/>
                            })
                        }
                    </View>
                </ScrollView>
                </View>
            }
        </>
    )
}
export default ServiceListScreen;

const styles = StyleSheet.create({})
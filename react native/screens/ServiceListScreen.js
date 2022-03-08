import React from 'react';
import { View, Text } from "react-native";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceList } from "../redux/actions/server_actions"
import Loader from '../app_loader';
import CardComponent from '../components/CardComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { setActiveScreen } from '../redux/actions/application_actions';


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
                <ScrollView>
                    <View style={{ padding: 5 }}>
                        {
                            serviceList.map(el => {
                                return <CardComponent
                                    id={el.id}
                                    name={el.name}
                                    toNavigate={() => props.navigation.navigate("Service", { id: el.id })}
                                />
                            })
                        }
                    </View>
                </ScrollView>
            }
        </>
    )
}
export default ServiceListScreen;
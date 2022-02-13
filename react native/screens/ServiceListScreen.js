import React from 'react';
import { View, Text } from "react-native";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceList } from "../redux/actions/server_actions"
import Loader from '../app_loader';
import CardComponent from '../components/CardComponent';
import { ScrollView } from 'react-native-gesture-handler';

const ServiceListScreen = (props) => {

    const { serviceList, loadData } = useSelector(state => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getServiceList());
    }, []);

    return (
        <ScrollView>
            {
                loadData ? <Loader /> :
                    <View style={{ padding: 5 }}>
                        {
                            serviceList.map(el => {
                                return <CardComponent
                                    id={el.id}
                                    name={el.name}
                                    toAsck={() => alert("В разработке")}
                                    toNavigate={() => props.navigation.navigate("Service", { service: el })}
                                />
                            }
                            )
                        }
                    </View>
            }
        </ScrollView>
    )
}
export default ServiceListScreen;
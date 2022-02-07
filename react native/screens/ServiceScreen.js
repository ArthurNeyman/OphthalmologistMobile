import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-material-ui';
import { useSelector, useDispatch } from 'react-redux'
import { getServiceCatagories, gerServiceListByCatagory } from '../redux/actions/server_actions';
import { useState, useEffect } from 'react';
import Loader from '../app_loader';
import { getServiceById } from '../redux/actions/server_actions';

const ServiceScreen = (props) => {

  const { service, loadData } = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getServiceById(props.route.params.serviceId));
  }, []);

    return (
        <>
        {
            loadData ? <Loader/> : <Text>Дизайн компонента в рахработке.Содрежит описание услуги. Подразумевается наличие указания какой врач оказывает данную услугу и его контакты(особенно актуально для случая с ЭФИ))</Text>
        }
        </>
    )
}
export default ServiceScreen;
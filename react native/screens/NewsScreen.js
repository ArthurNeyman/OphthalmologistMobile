import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, Button } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { getNewsList } from '../redux/actions/server_actions'

import { Card } from 'react-native-material-ui';
import Loader from '../app_loader';

const NewsPreview = (props) => {
    console.log(props);
    return (
        <Card style={{ flex: 1 }}>
            <Image
                source={{ uri: props.img }} />
            <Text>
                {props.name}
            </Text>
            <Text>
                {props.date}
            </Text>
            <Button
                title="Подробнее"
                onPress={() => console.log("открыть статью " + props.name)}></Button>
        </Card>
    )
}

const NewsScreen = () => {

    const { newsList, loadData } = useSelector(state => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewsList());
    }, []);

    console.log(newsList);
    return (<>
    {
        loadData ? <Loader /> :
        <View>
            {newsList.map(el => <NewsPreview name={el.name} img={el.imgLink} date={el.date} />)}
        </View>
    }
        
        
    </>

    )
}

export default NewsScreen;



import React from "react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getNews } from '../redux/actions/server_actions'
import { Text, View } from "react-native";
import Loader from "../app_loader";
import { ScrollView } from "react-native-gesture-handler";

const NewsScreen = (props) => {
    const { news, loadData } = useSelector(state => state.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNews(props.route.params.newsId));
    }, []);
    return (
        <>
            {
                loadData ? <Loader /> :
                    <ScrollView>
                        <Text style={{fontSize:30,textAlign:"center"}}> Комопннет отображающий конкретную новость в разработке </Text>
                    </ScrollView>
            }
        </>
    )
}

export default NewsScreen;
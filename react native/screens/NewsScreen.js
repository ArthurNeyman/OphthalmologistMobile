
import React from "react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getNews } from '../redux/actions/server_actions'
import { Text, View } from "react-native";

import Moment from 'moment';
import Loader from "../app_loader";

const NewsScreen = (props) => {
    const { news, loadData } = useSelector(state => state.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNews(props.route.params.newsId));
    }, []);
    return (
        <View>
        {
            loadData ? <Loader/> :  <Text> {news.id} </Text>
        }
        </View>
    )
}

export default NewsScreen;
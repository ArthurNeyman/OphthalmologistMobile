import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getNewsList } from '../redux/actions/server_actions'
import Loader from '../app_loader';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import NewsPreviewCardComponent from "../components/NewsPreviewCardComponent"

const NewsListScreen = (props) => {

    const { newsList, loadData } = useSelector(state => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewsList());
    }, []);
    return (
        <>
            {
                loadData ? <Loader /> :
                    <ScrollView horizontal={false}>
                        {newsList.map(el =>
                            <TouchableOpacity
                                onPress={() => { props.navigation.navigate("News", { newsId: el.id }) }}>
                                <NewsPreviewCardComponent{...el} />
                            </TouchableOpacity>
                        )}
                    </ScrollView>
            }
        </>
    )
}

export default NewsListScreen;


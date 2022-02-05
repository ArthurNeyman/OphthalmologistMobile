import React from 'react';
import Moment from 'moment';
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from 'react-redux'
import { Card } from 'react-native-material-ui';

const NewsPreviewCardComponent = (news) => {

    const { theme } = useSelector(state => state.data)

    return (
        <Card style={{ flex: 1 }}>
            <Image
                source={{ uri: news.imgLink }} style={styles.imageStyle} />
            <Text style={styles.newsDateStyle}>
                {Moment(news.date).format('DD.MM.YYYY hh.mm')}
            </Text>
            <View style={styles.headerStyle}>
                <Text style={{ backgroundColor: theme.currentMainColor, fontSize: 24, color: "black" }}>
                    {news.name}
                </Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        resizeMode: 'stretch',
        margin: 10
    },
    headerStyle: {
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        margin: 10
    },
    newsDateStyle: {
        flex: 1,
        position: "absolute",
        margin: 10,
        right: 0,
        color: "black"
    }
});

export default NewsPreviewCardComponent;
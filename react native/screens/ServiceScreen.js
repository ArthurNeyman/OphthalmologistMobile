import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-anchor-carousel';
import { Card } from 'react-native-material-ui';
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons"
import { useEffect } from 'react';

const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');

const ServiceScreen = (props) => {

    const carouselRef = React.useRef(FlatList);

    let indexAuto = 0;

    const service = props.route.params.service

    carouselRef.goToNextPage = () => {
        if (indexAuto >= service.options.length - 1) indexAuto = -1;
        carouselRef.current.scrollToIndex(++indexAuto)
    }
    carouselRef.startAutoPlay = () => {
        carouselRef.timerId = setInterval(carouselRef.goToNextPage, 3000);
    };
    carouselRef.stopAutoPlay = () => {
        if (carouselRef.timerId) {
            clearInterval(carouselRef.timerId);
            carouselRef.timerId = null;
        }
    };

    useEffect(() => {
        if (service.options.length > 0)
            carouselRef.startAutoPlay()
        return () => {
            carouselRef.stopAutoPlay()
        }
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    indexAuto = index;
                    carouselRef.stopAutoPlay();
                    carouselRef.current.scrollToIndex(index);
                }}>
                <View >
                    <View>
                        <Text style={{ padding: 10, fontSize: 20, textAlign: "center", color: "black" }}>{item.message}</Text>
                    </View>
                    <View>
                        <Image style={{ width: windowWidth * 0.9, height: windowsHeight * 0.35, resizeMode: "contain" }} source={require('../../src/images/eyes.png')} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <ScrollView>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 25, padding: 10, paddingTop: 30, textAlign: "center" }}>
                {service.name}
            </Text>
            <Text style={{ color: "black", fontSize: 20, padding: 20, textAlign: "left" }}>
                {service.description}
            </Text>
            {
                service.options.length > 0 ?
                    <Carousel
                        onPress={() => { carouselRef.stopAutoPlay() }}
                        ref={carouselRef}
                        data={service.options}
                        renderItem={renderItem}
                        style={styles.carousel}
                        itemWidth={windowWidth * 0.8}
                        containerWidth={windowWidth}
                        separatorWidth={10} />
                    : <></>
            }
            <View style={{ padding: 5 }}>
                <Text style={{ fontSize: 22, paddingBottom: 10, color: "black", textAlign: "center" }}> {service.doctors.length > 1 ? "Сотрудники оказывающие" : "Сотрудник оказывающий"} услугу</Text>
                {
                    service.doctors.map(el => {
                        return <TouchableOpacity onPress={() => { props.navigation.navigate("Staff", { id: el.id }) }}>
                            <Card style={{ padding: 5, flex: 1 }}>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ flex: 1, padding: 10, justifyContent: "center", alignItems: "center" }}>
                                        <SimpleLineIcon color={"#00ADA8"} size={35} name="user" />
                                    </View>
                                    <View style={{ flex: 4, padding: 5 }}>
                                        <Text style={{ flex: 1, color: "black", fontSize: 25, fontWeight: "bold" }}>{el.name}</Text>
                                        <Text style={{ flex: 1, color: "black", fontSize: 20 }}>{el.position}</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    carousel: {
        padding: 10
    },
    item: {
    }
});

export default ServiceScreen;
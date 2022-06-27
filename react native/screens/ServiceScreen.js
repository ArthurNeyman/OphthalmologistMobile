import React, { useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-anchor-carousel';
import { Card } from 'react-native-material-ui';
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons"
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getServiceById } from '../redux/actions/server_actions';
import Loader from '../app_loader';
import { StatusBar } from 'react-native';

const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');

//скрин услуги
const ServiceScreen = (props) => {

    const carouselRef = React.useRef(FlatList);

    let indexAuto = 0;

    const { service, loadData, theme } = useSelector(state => state.data);
    const dispatch = useDispatch()

    carouselRef.goToNextPage = () => {
        if (indexAuto >= service.options.length - 1) indexAuto = -1;
        carouselRef.current.scrollToIndex(++indexAuto)
    }

    carouselRef.startAutoPlay = () => {
        carouselRef.timerId = setInterval(carouselRef.goToNextPage, 4000);
    };

    carouselRef.stopAutoPlay = () => {
        if (carouselRef.timerId) {
            clearInterval(carouselRef.timerId);
            carouselRef.timerId = null;
        }
    };

    useEffect(() => {
        dispatch(getServiceById(props.route.params.id))
        return () => {
            carouselRef.stopAutoPlay()
        }
    }, []);

    useEffect(() => {
        if (service.options && service.options.length > 1)
            carouselRef.startAutoPlay()
        return () => {
            carouselRef.stopAutoPlay()
        }
    }, [service.options]);

    const renderItem = ({ item, index }) => {
        let Image_Http_URL = require('../../src/images/eyes.png')
        if (item.imgLink)
            Image_Http_URL = { uri: item.imgLink }
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
                        <Text style={{ padding: 10, fontSize: 22, textAlign: "center", color: theme.currentMainColor }}>{item.name}</Text>
                    </View>
                    <View>
                        <Image style={{ width: windowWidth * 0.9, height: windowsHeight * 0.35, resizeMode: "contain" }} source={Image_Http_URL} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <>
            {
                loadData ? <Loader /> :
                    <ScrollView  showsVerticalScrollIndicator={false} style={{backgroundColor:"white",paddingTop:StatusBar.currentHeight,minHeight:windowsHeight}}>
                        <Text style={{ color: theme.currentMainColor, fontWeight: "bold", fontSize: 25, padding: 10, textAlign: "center" }}>
                            {service.name}
                        </Text>
                        {
                            service.description ?
                                <Text style={styles.text}>
                                    {" \t " + service.description.split("<br/>").join("\n ")}
                                </Text> :
                                <></>
                        }
                        {
                            service.options && service.options.length > 0 ?
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
                            <Text style={{ fontSize: 22, paddingBottom: 10, color: "black", textAlign: "center" }}>
                                {service.doctors && service.doctors.length > 0 ?
                                    service.doctors.length > 1 ? "Сотрудники оказывающие услугу" : "Сотрудник оказывающий услугу" : ""}
                            </Text>
                            {
                                service.doctors && service.doctors.length > 0 ? service.doctors.map(el => <TouchableOpacity onPress={() => { props.navigation.navigate("Staff", { id: el.id }) }}>
                                    <Card style={{container:{borderRadius:1,borderColor:theme.currentMainColor,borderWidth:2,padding:5,flex:1}}}>
                                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <View style={{ flex: 1, padding: 10, justifyContent: "center", alignItems: "center" }}>
                                                <SimpleLineIcon color={"#00ADA8"} size={35} name="user" />
                                            </View>
                                            <View style={{ flex: 4, padding: 5 }}>
                                                <Text style={{ flex: 1, color: "black", fontSize: 18, fontWeight: "bold" }}>{el.first_name + " " + el.surname + " " + el.last_name}</Text>
                                                <Text style={{ flex: 1, color: theme.currentMainColor, fontSize: 15 }}>{el.position}</Text>
                                            </View>
                                        </View>
                                    </Card>
                                </TouchableOpacity>
                                ) : <></>
                            }
                        </View>
                        <View style={{height:100}}></View>
                    </ScrollView>
            }
        </>
    )
}

const styles = StyleSheet.create({
    carousel: {
        padding: 10
    },
    item: {
    },
    text: {
        color: "black",
        fontSize: 20,
        padding: 10,
    }
});

export default ServiceScreen;
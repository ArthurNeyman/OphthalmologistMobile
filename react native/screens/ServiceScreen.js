import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-anchor-carousel';

const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    carousel: {
        padding: 5
    },
    item: {
    }
});

const ServiceScreen = (props) => {

    const carouselRef = React.useRef(null);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    carouselRef.current.scrollToIndex(index);
                }}>
                <View >
                    <View>
                        <Text style={{ padding: 10, fontSize: 20, textAlign: "center", color: "black" }}>{item.message}</Text>
                    </View>
                    <View>
                    <Image style={{width:windowWidth*0.9,height:windowsHeight*0.35,resizeMode: "contain"}} source={require('../../src/images/eyes.png')} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    const service = props.route.params.service

    return (
        <ScrollView>
            <Text style={{ fontSize: 25, padding: 10,paddingTop:30, textAlign: "center" }}>
                {service.name}
            </Text>
            <Text style={{ fontSize: 20, padding: 10, textAlign: "center" }}>
                {service.description}
            </Text>
            {
                service.options.length > 0 ?
                    <View>
                        <Carousel
                            ref={carouselRef}
                            data={service.options}
                            renderItem={renderItem}
                            style={styles.carousel}
                            itemWidth={windowWidth * 0.8}
                            containerWidth={windowWidth}
                            separatorWidth={20} />
                    </View> : <></>
            }
            <View style={{ padding: 5 }}>
                <Text style={{ fontSize: 20 ,color:"black"}}>Сотрудники оказывающие услугу:</Text>
                {
                    service.doctors.map(el => {
                        return <>
                            <View style={{ padding:5 }}>
                                <Text style={{ flex: 1, fontSize: 20 }}>{el.name}</Text>
                                <Text style={{ flex: 1, fontSize: 20 }}>Контактный телефон для связи по WhatsApp: {el.whatsAppContact}</Text>
                            </View>
                        </>
                    })
                }
            </View>
        </ScrollView>
    )
}

export default ServiceScreen;
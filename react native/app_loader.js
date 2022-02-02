import React from "react";
import { View, StyleSheet,Text } from 'react-native'
import LottieView from "lottie-react-native"

const Loader = () => {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <LottieView source={require("../src/eye.json")} autoPlay loop />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0,0,0,0.3)',
        zIndex: 1
    },
})
export default Loader;
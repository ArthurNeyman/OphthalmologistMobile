import React from 'react';
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAnswers } from '../redux/actions/server_actions';
import Loader from '../app_loader';
import DropDownItem from 'react-native-drop-down-item';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { Card } from 'react-native-material-ui';
import { StatusBar } from 'react-native';

const { width: windowWidth, height: windowsHeight } = Dimensions.get('window');

//скрин вопрос/ответ
const QuastionsAndAnswersScreen = () => {

    const { answers, loadData,theme } = useSelector(state => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAnswers());
    }, []);

    return (
        <>
            {
                loadData ? <Loader /> :
                    <View style={{ paddingTop: StatusBar.currentHeight }}>
                        <View style={{ borderBottomColor: "#00ABB1", borderBottomWidth: 1, padding: 20 }}>
                            <Text style={{ fontSize: 20, color: "#00ABB1", textAlign: "center" }}>Вопрос/ответ</Text>
                        </View>
                        <ScrollView >
                            {
                                answers.map(answer =>
                                    <>
                                        <View style={{ padding: 3 }}>
                                            <DropDownItem
                                                header={
                                                    <View style={{ flex: 1, flexDirection: "row", shadowColor: "black", shadowRadius: 10, shadowOffset: 10 }}>
                                                        <Card>
                                                            <View style={{ flex: 1, backgroundColor: "#00ADA8", padding: 10 }}>
                                                                <Text style={{ flex: 6, fontSize: 24, color: "white", fontFamily: "roboto", fontWeight: "bold" }} >
                                                                    {answer.question}
                                                                </Text>
                                                            </View>
                                                        </Card>
                                                    </View>
                                                }>
                                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                                                    <FontAwesomeIcon style={{ transform: [{ rotateX: '180deg' }], paddingLeft: windowWidth * 0.07 }} name='mail-forward' size={30} color={"#00ABB1"} />
                                                    <View>
                                                        <Card style={{container:{borderRadius:0.5,borderColor:theme.currentMainColor,borderWidth:1,width: windowWidth * 0.75}}} >
                                                            <Text style={{ fontSize: 20, color: "#00ABB1", padding: 10 }}>{answer.answer}</Text>
                                                        </Card>
                                                    </View>
                                                </View>
                                            </DropDownItem>
                                        </View>
                                    </>
                                )
                            }
                            <View style={{ height: 50 }}></View>
                        </ScrollView>
                    </View>
            }
        </>
    )
}
export default QuastionsAndAnswersScreen;

const styles = StyleSheet.create({

})
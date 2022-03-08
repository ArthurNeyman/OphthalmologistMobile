import React from 'react';
import { View, Text, Image } from "react-native";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAnswers } from '../redux/actions/server_actions';
import Loader from '../app_loader';
import DropDownItem from 'react-native-drop-down-item';
import { ScrollView } from 'react-native-gesture-handler';
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons"

const QUESTION = require('../../src/images/question.png')
const ANSWER = require('../../src/images/answer.png')

const QuastionsAndAnswersScreen = () => {

    const { answers, loadData } = useSelector(state => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAnswers());
    }, []);

    return (
        <>
            {
                loadData ? <Loader /> :
                    <ScrollView style={{ paddingTop: 0 }}>
                        {
                            answers.map(answer =>
                                <>
                                    <View style={{ padding: 10 }}>
                                        <DropDownItem
                                            // invisibleImage={QUESTION}        
                                            // visibleImage={ANSWER}
                                            style={{ bakgroundColor: "red" }}
                                            header={
                                                <View style={{ flex: 1, flexDirection: "row", padding: 5}}>
                                                    <Text style={{ backgroundColor:"#00ADA8",borderRadius:10,flex: 6, fontSize: 24, color: "white", fontFamily: "roboto", fontWeight: "bold",padding:5}} >
                                                        {answer.question}
                                                    </Text>
                                                    <Text style={{flex:1}}></Text>
                                                </View>
                                            }>
                                            <View style={{ width:"100%", flex: 1, flexDirection: "row"}}>
                                                <Text style={{ flex: 1 }}></Text>
                                                <Text style={{backgroundColor:"#00ABB1",borderRadius:10, flex: 3, fontSize: 22, color: "white", fontFamily: "roboto",fontWeight:"bold",textAlign:"left",padding:5}}>{"    "+answer.answer}</Text>
                                            </View>
                                        </DropDownItem>
                                    </View>
                                </>
                            )
                        }
                    </ScrollView>
            }
        </>
    )
}
export default QuastionsAndAnswersScreen;
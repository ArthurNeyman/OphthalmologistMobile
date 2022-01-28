import React from 'react';
import { Toolbar } from "react-native-material-ui";
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const ToolBarMenu = ({title}) => {

    const navigation = useNavigation();
    const index=navigation.getState().index;

    return (
        <Toolbar 
        style={{container:{backgroundColor:"white"},titleText:{color:"black"},leftElement:{color:"gray"},rightElement:{color:"gray"}}}
        onLeftElementPress={() => { 
            if(index==0)
                navigation.dispatch(DrawerActions.toggleDrawer())
            else navigation.goBack();
        }}
        leftElement= {index==0 ? "menu" : "keyboard-backspace"}
        centerElement={title}
        // searchable={{
        //     autoFocus: true,
        //     placeholder: 'Search',
        // }}
        // rightElement={{
        //     menu: {
        //         icon: "more-vert",
        //         labels: ["item 1", "item 2"]
        //     }
        // }}
        // onRightElementPress={(label) => { }}
    />
    );
};

export default ToolBarMenu;
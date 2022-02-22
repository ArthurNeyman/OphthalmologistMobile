import React from 'react';
import { Toolbar } from "react-native-material-ui";
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useSelector} from 'react-redux'
import { StyleSheet } from 'react-native';

const ToolBarMenu = () => {

    const navigation = useNavigation();
    const index=navigation.getState().index;

    const { activeScreen, theme } = useSelector(state => state.data)

    return (
        <Toolbar 
        style={styles.toolbarStyle}
        onLeftElementPress={() => { 
            if(index==0)
                navigation.dispatch(DrawerActions.toggleDrawer())
            else navigation.goBack();
        }}
        leftElement= {index==0 ? "menu" : "keyboard-backspace"}
        centerElement={activeScreen}
    />
    );
};

const styles = StyleSheet.create({
   toolbarStyle:{
       container:{backgroundColor:"white"},
       titleText:{color:"black"},
       leftElement:{color:"gray"},
       rightElement:{color:"gray"}}
  });

export default ToolBarMenu;
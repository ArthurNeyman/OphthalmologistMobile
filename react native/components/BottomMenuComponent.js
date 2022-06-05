import React from 'react';
import { StyleSheet } from "react-native"
import { BottomNavigation } from 'react-native-material-ui';
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons"
import { routes } from '../redux/actions/application_actions';


//компонент нижнего меню
const BottomMenuComponent = (props) => {

    const Action = (props) => {
        return <BottomNavigation.Action
            key={props.route.routeName}
            style={props.state.index == props.index ? styles.activeButton : styles.defaultButton}
            icon={<SimpleLineIcon size={25} name={props.route.iconName} />}
            label={props.route.viewName}
            onPress={() => {
                if (props.index == 0) {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }]
                    })
                }
                else
                    props.navigation.navigate(props.route.routeName)
            }}
        />
    }

    let index = 0

    return (
        <BottomNavigation>
            {
                props.state.routes.map(route => {
                    return <Action index={index++} route={routes[route.name]} {...props} />
                })
            }
        </BottomNavigation>
    );
};

const styles = StyleSheet.create({
    activeButton: {
        icon: { color: "#00ADA8" },
        label: { color: "#00ADA8" }
    },
    defaultButton: {
        icon: { color: "black" },
        label: { color: "black" }
    }
});

export default BottomMenuComponent;
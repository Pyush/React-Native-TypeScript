import strings from "./strings";
import styles from "./styles";
import React, {Component} from "react";
import {Text, View, Button, TextInput, Platform} from "react-native";
import {NavigationScreenProps, TabScene} from "react-navigation";
import {bool} from "prop-types";

class LoginScreen extends Component<NavigationScreenProps> {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerTitile}>{'REGISTER WITH PHONE'}</Text>
                <Text>{'Your name'}</Text>
                <TextInput>{'Your Display Name'}</TextInput>
            </View>
        );
    }
}

export default LoginScreen;

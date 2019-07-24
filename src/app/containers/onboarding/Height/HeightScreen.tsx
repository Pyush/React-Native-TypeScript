import React, {Component} from "react";
import {NavigationScreenProps} from "react-navigation";
import {Text, TextInput, View} from "react-native";
import styles from "./styles";

class HeightScreen extends Component<NavigationScreenProps> {

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.headerTitile}>{'Height'}</Text>
                <Text>{'Your name'}</Text>
                <TextInput>{'Your Display Name'}</TextInput>
                </View>
        );
    }
}

export default HeightScreen;

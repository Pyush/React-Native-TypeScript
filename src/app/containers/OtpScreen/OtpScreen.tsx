import styles from "./styles";
import React, {Component} from "react";
import {Alert, Image, Text, TouchableOpacity, View} from "react-native";

import {NavigationScreenProps} from "react-navigation";
import CodeInput from 'react-native-confirmation-code-input';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

class OtpScreen extends Component<NavigationScreenProps> {
    constructor(props: any) {
        super(props);

        this.state = {
            code: ''
        };
    }

    _onFulfill(code: string) {
        // TODO: call API to check code here
        // If code does not match, clear input with: this.refs.codeInputRef1.clear()
        if (code === '1234') {
            Alert.alert(
                'Confirmation Code',
                'Successful!',
                [{text: 'OK'}],
                {cancelable: false}
            );
        } else {
            Alert.alert(
                'Confirmation Code',
                'Code not match!',
                [{text: 'OK'}],
                {cancelable: false}
            );

            //this.refs.codeInputRef1.clear();
        }
    }


    _onFinishCheckingCode1(isValid: boolean) {
        console.log(isValid);
        if (!isValid) {
            Alert.alert(
                'Confirmation Code',
                'Code not match!',
                [{text: 'OK'}],
                {cancelable: false}
            );
        } else {
            Alert.alert(
                'Confirmation Code',
                'Successful!',
                [{text: 'OK'}],
                {cancelable: false}
            );
        }
    }

    _onFinishCheckingCode2(isValid: boolean, code: string) {
        console.log(isValid);
        if (!isValid) {
            Alert.alert(
                'Confirmation Code',
                'Code not match!',
                [{text: 'OK'}],
                {cancelable: false}
            );
        } else {
            this.setState({code});
            Alert.alert(
                'Confirmation Code',
                'Successful!',
                [{text: 'OK'}],
                {cancelable: false}
            );
        }
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Text style={styles.headerTitile}>{'VERIFY YOUR ACCOUNT'}</Text>
                    <View style={styles.items}>
                        <Text style={styles.text}>{'Please enter your verification code'}</Text>
                        <Text style={styles.text}>{'We sent to your mobile ***76'}</Text>
                        <View style={styles.headerContainer}>
                            <CodeInput
                                ref="codeInputRef2"
                                secureTextEntry
                                compareWithCode='1234'
                                activeColor='#000000'
                                inactiveColor='#000000'
                                autoFocus={false}
                                ignoreCase={true}
                                inputPosition='center'
                                size={50}
                                codeLength={4}

                                onFulfill={(isValid: boolean) => this._onFinishCheckingCode1(isValid)}
                                containerStyle={{marginTop: 30,}}
                                codeInputStyle={styles.pinViewInput}
                            />
                        </View>
                        <View style={styles.line}></View>
                        <Text style={styles.label}>{'Resend again?'}</Text>

                        <TouchableOpacity style={styles.buttonStyle}
                        onPress={()=>{
                            this.props.navigation.navigate('OBTabScreen');
                        }
                        }
                        >
                            <Text style={styles.getStartButton}>{'VERIFY'}</Text>
                        </TouchableOpacity>


                    </View>
                    <Image source={require('../../../assets/bottom_image.png')}
                           style={{height: 300, marginTop: 50, resizeMode: 'contain'}}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default OtpScreen;

import styles from "./styles";
import React, {Component} from "react";
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

class RegisterScreen extends Component {

    render() {
        return (

                <KeyboardAwareScrollView>
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity
                                style={{width: 35}}
                                onPress={() => {
                                    this.props.navigation.navigate("Landing")
                                }}>
                                <Image source={require('../../../assets/arrow_back.png')} style={styles.backButton}/>
                            </TouchableOpacity>
                            <Text style={styles.headerTitile}>{'REGISTER WITH PHONE'}</Text>

                        </View>
                        <View style={styles.items}>

                            <Text style={styles.label}>{'Your name'}</Text>
                            <TextInput
                                placeholder={'Your Display Name'}
                                placeholderTextColor={'#000'}
                                style={styles.text}/>

                            <Text style={styles.label}>{'Email Address'}</Text>
                            <TextInput
                                style={styles.text}
                                placeholder={'Your Email Address'}
                                placeholderTextColor={'#000'}
                            ></TextInput>


                            <Text style={styles.label}>{'Mobile Number'}</Text>
                            <TextInput style={styles.text}
                                       placeholder={'Add Mobile Number'}
                                       keyboardType={'numeric'}
                                       maxLength={10}
                                       placeholderTextColor={'#000'}
                            >{}</TextInput>

                            <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={styles.getStartButton}>{'Get Started'}</Text>
                            </TouchableOpacity>


                            <View style={styles.orContainer}>
                                <View style={styles.layer9}/>
                                <Text style={{padding: 5}}>{'or'}</Text>
                                <View style={styles.layer9}/>

                            </View>


                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate("OtpScreen")
                                }}>
                                <ImageBackground source={require('../../../assets/loginwithfb.png')}
                                                 style={styles.facebookStyleButton}
                                >
                                    <Text style={styles.buttonText}>{'Login with Facebook'}</Text>
                                </ImageBackground>

                            </TouchableOpacity>

                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image source={require('../../../assets/bottom_image.png')}
                               style={styles.bottmimage}/>
                        </View>
                    </View>
                </KeyboardAwareScrollView>


        );
    }
}

export default RegisterScreen;

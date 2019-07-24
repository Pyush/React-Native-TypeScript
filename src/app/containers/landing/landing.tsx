import React, {Component} from "react";
import {Dimensions, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import styles from "./styles";
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import colors from '../../../Colors'

export class Landing extends Component<NavigationScreenProps> {
    static navigationOptions = {
        header: null
    };

    state = {
        progress: 45,
        progressWithOnComplete: 0,
        progressCustomized: 0,
    }

    render() {

        const barWidth = Dimensions.get('screen').width - 150;


        return (
            <View style={styles.container}>
                <Image source={require('../../../assets/landing_logo.jpeg')} style={styles.logoImage}/>
                <Text style={styles.topLogoContiner}>{'App Name'}</Text>

                <ProgressBarAnimated
                    {...styles.progressCustomStyles}
                    width={barWidth}
                    value={this.state.progress}
                    backgroundColorOnComplete={colors.periwinkleBlue}
                />

                <View style={styles.boottmView}>


                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("RegisterScreen")
                        }}>
                        <ImageBackground source={require('../../../assets/loginwithfb.png')}
                                         style={styles.facebookStyleButton}>
                            <Text
                                style={styles.buttonText}>{'Login with Facebook'}</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <View style={styles.phoneContainer}>
                        <Text style={styles.phoneStyle}>{'OR PHONE'}</Text>
                        <View style={styles.layer9}/>
                    </View>
                    <Text
                        style={styles.infoText}>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}</Text>

                </View>
            </View>
        );
    }
}

export default Landing;

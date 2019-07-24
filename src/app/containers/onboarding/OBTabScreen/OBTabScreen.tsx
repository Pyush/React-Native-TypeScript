import React, {Component} from "react";
import {NavigationScreenProps} from "react-navigation";
import {Image, ScrollView, Text, View} from "react-native";
import Carousel from 'react-native-snap-carousel';
import _ from "lodash";
import styles from './styles'

const TabbarMenu = [
    {
        id: 100,
        label: "My Location",

    },
    {
        id: 200,
        label: "sample 2",

    },
    {
        id: 300,
        label: "sample 1",

    },
    {
        id: 400,
        label: "sample 1",

    },
    {
        id: 500,
        label: "sample 1",

    },
    {
        id: 600,
        label: "sample 1",

    },
    {
        id: 700,
        label: "sample 1",

    },
];


class OBTabScreen extends Component<NavigationScreenProps> {

    state = {
        index: 0,
        routes: [
            {title: 'Sample 1', type: 100},
            {title: 'Sample 2', type: 200},
            {title: 'Sample 3', type: 300},
        ],
    };

    _renderItem({item, index}) {
        return (
            <View style={{height: 500}}>
                {item.type == 100 &&
                <View style={{padding: 10, backgroundColor: '#FFF'}}>
                    <Text style={{padding: 10}}>{item.title}</Text>
                </View>
                }
                {item.type == 200 &&
                <View style={{padding: 10, backgroundColor: '#ff3622'}}>
                    <Text style={{padding: 10}}>{item.title}</Text>
                </View>
                }

                {item.type == 300 &&
                <View style={{padding: 10, backgroundColor: '#3d27ff'}}>
                    <Text style={{padding: 10}}>{item.title}</Text>
                </View>
                }

            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {_.map(TabbarMenu, (item, index) => {
                        return (
                            <View style={[styles.shadowBox, {flexDirection: 'row', alignItems: 'center'}]}>

                                <Image source={require('../../../../assets/my_location.png')}
                                       style={{height: 24, width: 24, resizeMode: 'contain', margin: 8}}/>
                                <View
                                    style={{backgroundColor: '#dadada', width: 1, height: 30}}
                                />
                                <Text style={{
                                    color: '#9e95fe',
                                    paddingLeft: 25,
                                    paddingRight: 25,
                                    fontWeight: 'bold',
                                    fontSize: 18
                                }}>{item.label}</Text>
                            </View>

                        );
                    })}
                </ScrollView>


                <Carousel

                    data={this.state.routes}
                    renderItem={this._renderItem}
                    sliderWidth={900}
                    sliderHeight={500}
                    itemHeight={500}
                    itemWidth={900}
                />
            </View>
        );
    }
}

export default OBTabScreen;

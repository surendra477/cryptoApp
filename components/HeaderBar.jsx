import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image,
    FlatList,
    Animated,
    SafeAreaView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';

const HeaderBar = ({right}) => {
    const navigation = useNavigation();
    return (
        <View style={{paddingHorizontal:SIZES.padding,flexDirection:'row'}}>
            <View style={{flex:1,alignItems:'flex-start'}}>
                <TouchableOpacity
                style={{
                    flexDirection:'row',
                    justifyContent: 'center'
                }}
                onPress={() => navigation.goBack()}
                >
                    <Image source={icons.back_arrow}
                    resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor:COLORS.gray
                    }}
                     />
                     <Text style={{marginLeft:SIZES.base,...FONTS.h2}}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}
                    onPress={() => console.log('Press')}
                >
                    {right ? <Image source={icons.star}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,

                        }}
                    />: null}
                    
                    
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HeaderBar;

import React from 'react';
import { View, StyleSheet, Touchable, TouchableOpacity, Text } from 'react-native';
import { FONTS, SIZES, COLORS } from '../constants';

const TextButton = ({label,customContainerStyle, customLabelStyle,onPress,bgColor}) => {
    return (
        <TouchableOpacity
        style={{
            height:45,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:SIZES.radius,
            backgroundColor: bgColor,
            ...customContainerStyle
        }}
            onPress={onPress}
        >
            <Text style={{
                color: COLORS.white, ...FONTS.h4, ...customContainerStyle, textAlign: 'center',marginTop:5
}}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default TextButton;

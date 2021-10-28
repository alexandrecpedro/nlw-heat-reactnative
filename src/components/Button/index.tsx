import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, ColorValue, ActivityIndicator } from 'react-native';
import { AntDesign } from "@expo/vector-icons"; // expo icons library 

import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    color: ColorValue;
    backgroundColor: ColorValue;
    // optional dinamic icon = typeof AntDesign (icon name)
    icon?: React.ComponentProps<typeof AntDesign>['name'];
    isLoading: boolean;
}

// ...rest = the other properties contained in TouchableOpacityProps that weren't mentioned
export function Button({ title, color, backgroundColor, icon, isLoading = false, ...rest }: Props) {
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor }]}
            // reduce the effects of button click
            activeOpacity={0.7}
            // is there a request ? disable the button
            disabled={isLoading}
            {...rest}
        >
            { 
                // color = text color
                isLoading ? <ActivityIndicator color={color} /> :
                    <>
                        <AntDesign name={icon} size={24} style={styles.icon} />
                        <Text style={[styles.title, { color }]}> {title} </Text>
                    </>
            }
        </TouchableOpacity>
    )
}
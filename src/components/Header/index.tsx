import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

import LogoSvg from '../../assets/logo.svg';

export function Header() {
    return (
        <View style={styles.container}>
            <LogoSvg />

            <UserPhoto imageUri='' />

            {/* clickable part of application */}
            <TouchableOpacity>
                <Text style={styles.logoutText}>Sair</Text>
            </ TouchableOpacity>
        </View>
    )
}

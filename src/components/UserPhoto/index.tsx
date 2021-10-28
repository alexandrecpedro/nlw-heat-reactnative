import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import avatarImg from '../../assets/avatar.png';

import { styles } from './styles';
import { COLORS } from '../../theme';

// Image Sizes
const SIZES = {
    SMALL: {
        containerSize: 32, // gradient effect outside image
        avatarSize: 28 // inside container = image
    },
    NORMAL: {
        containerSize: 48,
        avatarSize: 48
    }
}

// Types of components where it's used
type Props = {
    imageUri: string | undefined;
    sizes?: 'SMALL' | 'NORMAL'; // optional property. If this is undefined, will be defined as 'NORMAL'
}

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUri, sizes = 'NORMAL'}: Props) {
    const { containerSize, avatarSize } = SIZES[sizes];
    return (
        <LinearGradient
            colors={[COLORS.PINK, COLORS.YELLOW]}
            start={{ x: 0, y: 0.8}} // change color transition direction
            end={{ x: 0.9, y: 1}} 
            style={[
                styles.container
            ]}
        >
            <Image 
                source={{ uri: imageUri || AVATAR_DEFAULT }}
                style={[
                    styles.avatar,
                    {
                        width: avatarSize,
                        height: avatarSize,
                        borderRadius: avatarSize / 2
                    }
                ]}
            />
        </LinearGradient>
    )
}

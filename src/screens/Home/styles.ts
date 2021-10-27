import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    // container style rules
    container: {
        flex: 1, // use hole screen (React Native becomes with previously activated flexbox)
        backgroundColor: COLORS.BLACK_SECONDARY, // dark background
        paddingTop: getStatusBarHeight() + 17 // padding top space looking for iPhone users
    }
});
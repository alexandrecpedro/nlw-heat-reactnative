import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
    // container style rules
    container: {
        width: '100%',
        flexDirection: 'row', // each component next to other
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    // style for the light text
    logoutText: {
        fontSize: 15,
        fontFamily: FONTS.REGULAR,
        color: COLORS.WHITE
    }
});
import { StyleSheet } from 'react-native';
import common from './common.style';
import theme from './theme.style';

export default StyleSheet.create({
    firstBtn: {
        ...common.btn,
        backgroundColor: theme.BACKGROUND_COLOR_LIGHT
    },
    secondBtn: {
        ...common.btn,
        backgroundColor: theme.BACKGROUND_COLOR_DARK,
        borderRadius: theme.BORDER_RADIUS,
    },
    text1: {
        fontSize: theme.FONT_SIZE_MEDIUM,
    },
    text2: {
        fontSize: theme.FONT_SIZE_LARGE,
    }
});

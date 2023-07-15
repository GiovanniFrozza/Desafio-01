import { StyleSheet } from "react-native";

import {colors} from '../../../global'

export const styles = StyleSheet.create({
	logoBackGround: {
		backgroundColor: colors.base.gray700,
		width: '100%',
		height: 173,
		flexShrink: 0,
	},
	logo: {
		color: colors.product.purpleDark,
		fontWeight: 'bold',
		textAlign:'center',
		fontSize: 50,
		marginTop: 70,
	}

})
import { StyleSheet } from "react-native";

import { colors } from '../../../global'

export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.base.gray600,
		flex: 1,
	},
	form: {
		padding: 24,
		flexDirection: "row",
		marginTop: -50
	},
	textInput: {
		backgroundColor: colors.base.gray500,
		color: colors.product.white,
		display: "flex",
		flexDirection: 'row',
		padding: 16,
		alignItems: "center",
		gap: 8,
		borderRadius: 6,
		flex: 1,
	},
	buttonAdd: {
		backgroundColor: colors.product.blueDark,
		alignItems: 'center',
		justifyContent: 'center',
		display: "flex",
		padding: 18,
		width: 56,
		height: 56,
		borderRadius: 6,
		gap: 8
	},
	statusContainer: {
		flexDirection: "row",
		justifyContent: 'space-between',
		paddingHorizontal: 16,
	},
	statusCreated: {
		color: colors.product.blue,
		fontSize: 14,
		fontWeight: '700',
		lineHeight: 20,
	},
	statusDone: {
		color: colors.product.purple,
		fontSize: 14,
		fontWeight: '700',
		lineHeight: 20,
	},
	containerEmptyList: {
		flex: 1,
		paddingVertical: 48,
		paddingHorizontal: 20,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textEmptyList: {
		color: colors.base.gray300,
		textAlign: 'center',
		fontSize: 14,
		fontStyle: 'normal',
		fontWeight: '700',
		lineHeight: 19.6,
	},
	clipboard: {
		fontSize: 55,
		color: colors.base.gray300,
		width: 56,
		height: 56
	},
})
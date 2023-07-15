import { StyleSheet } from "react-native";

import { colors } from '../../../global'

export const styles = StyleSheet.create({
	container: {
		borderColor: colors.base.gray400,
		backgroundColor: colors.base.gray500,
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		alignSelf: "stretch",
		margin: 10,
		paddingTop: 12,
		paddingRight: 8,
		paddingBottom: 12,
		paddingLeft: 12,
		gap: 8,
		borderRadius: 8,
		borderWidth: 1,
		elevation: 2, // Somente para Android
	},
	checkbox: {
		width: 24,
		height: 24,
		color: colors.product.blue,
	},
	text: {
		color: colors.base.gray100,
		fontSize: 14,
		fontWeight: '400',
		lineHeight: 19.6,
		flex: 1,
		textAlign: 'center',
	},
	completedText: {
		color: colors.base.gray300,
		textDecorationLine: "line-through",
	},
	trash: {
		fontSize: 30,
		color: colors.base.gray300,
		width: 32,
		height: 32
	},
	redTrash: {
		color: colors.feedback.danger,
	},
})
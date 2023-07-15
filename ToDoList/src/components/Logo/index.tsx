import { View, Text } from "react-native";

import { styles } from "./styles";

export function Logo() {
	return (
		<>
			<View style={styles.logoBackGround}>
				<Text style={styles.logo}>TODO</Text>
			</View>
		</>
	)
}
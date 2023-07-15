import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text } from "react-native"
import { CheckBox } from 'react-native-elements';

import { styles } from "./styles"
import { colors } from '../../../global';

type Props = {
	description: string
	onTaskChecked: (checked: boolean) => void
	onRemove: () => void;
}

export function Todos({ description, onTaskChecked, onRemove }: Props) {
	const [isChecked, setIsChecked] = useState(false);
	const [isTrashClicked, setIsTrashClicked] = useState(false);

	const handleTaskChecked = () => {
		setIsChecked(!isChecked);
		onTaskChecked(!isChecked);
	};

	return (
		<View style={styles.container}>
			<CheckBox
				checked={isChecked}
				checkedColor={colors.product.blue}
				style={styles.checkbox}
				onPress={handleTaskChecked}
			/>
			<Text style={[styles.text, isChecked && styles.completedText]}>{description}</Text>
			<Icon
				name="trash"
				style={[styles.trash, isTrashClicked && styles.redTrash]}
				onPressIn={() => {
					setIsTrashClicked(true)
				}}
				onPressOut={() => {
					setIsTrashClicked(false)
				}}
				onPress={onRemove}
			/>
		</View>
	);
}

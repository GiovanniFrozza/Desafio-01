import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Logo } from "../../components/Logo";

import { styles } from './styles'
import { colors } from "../../../global";
import { useState } from "react";
import { Todos } from "../../components/Todos";
import { Alert } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

export default function Home() {
	const [todos, setTodo] = useState<string[]>([]);
	const [todosName, setTodosName] = useState('');
	const [createdTask, setCreatedTask] = useState(0);
	const [taskDone, setTaskDone] = useState(0);
	const [checkedTasks, setCheckedTasks] = useState<string[]>([]); // Estado para armazenar as tarefas com o checkbox marcado


	function addTask() {
		countPlus();
		setTodo(prevState => [...prevState, todosName]);
		setTodosName('')
	}

	function handleTaskChecked(checked: boolean, item: string) {
		if (checked) {
			setTaskDone(prevState => prevState + 1);
			setCheckedTasks(prevState => [...prevState, item]); // Adiciona a tarefa a checkedTasks se o checkbox foi marcado
		} else {
			countTaskDoneLess();
			setCheckedTasks(prevState => prevState.filter(x => x !== item)); // Remove a tarefa de checkedTasks se o checkbox foi desmarcado
		}
	}

	function countPlus() {
		setCreatedTask(prevState => prevState + 1);
	}

	function countTaskLess() {
		setCreatedTask(prevState => prevState - 1);
	}

	function countTaskDoneLess() {
		setTaskDone(prevState => prevState - 1); // Diminui -1 em taskDone se a tarefa tinha o checkbox marcado
	}

	function handleParticipantRemove(name: string) {
		const isTaskChecked = checkedTasks.includes(name); // Verifica se a tarefa está em checkedTasks

		Alert.alert("Remover", `Remover a tarefa selecionada?`, [
			{
				text: 'Sim',
				onPress: () => {
					setTodo(prevState => prevState.filter(x => x !== name));
					countTaskLess();

					if (isTaskChecked) {
						countTaskDoneLess();
					}
				}
			},
			{
				text: 'Nao',
				style: 'cancel'
			}
		]);
	}

	return (
		<>
			<View style={styles.container}>
				<Logo />

				<View style={styles.form}>
					<TextInput
						style={styles.textInput}
						placeholder="Adicione uma nova tarefa"
						placeholderTextColor={colors.base.gray300}
						onChangeText={setTodosName}
						value={todosName}
					/>
					<TouchableOpacity style={styles.buttonAdd} onPress={addTask}>
						<Text>
							+
						</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.statusContainer}>
					<Text style={styles.statusCreated}>Criadas ({createdTask})</Text>
					<Text style={styles.statusDone}>Concluidas ({taskDone})</Text>
				</View>

				<FlatList
					data={todos}
					keyExtractor={item => item}
					renderItem={({ item }) => (
						<Todos
							key={item}
							description={item}
							onTaskChecked={(checked) => handleTaskChecked(checked, item)}
							onRemove={() => handleParticipantRemove(item)}
						/>
					)}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={() => (
						<View style={styles.containerEmptyList}>
							<Icon
								style={styles.clipboard}
								name="clipboard"
							/>

							<Text style={styles.textEmptyList}>
								Voce ainda nao tem tarefas cadastradas. Crie tarefas e organize seus itens a fazer
							</Text>
						</View>
					)}
				/>
			</View>
		</>
	);
}
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'

export default function MealDetailScreen({ route, navigation }) {
	const mealId = route.params.mealId

	const selectedMeal = MEALS.find((meal) => meal.id === mealId)

	function headerBtnPressHandler() {
		console.log(123)
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon='star'
						color='white'
						onPress={headerBtnPressHandler}
					/>
				)
			},
		})
	}, [])

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{selectedMeal.title}</Text>

			<MealDetails
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
				textStyle={styles.detailText}
			/>

			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />

					<Subtitle>Steps </Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	root: {
		marginBottom: 32,
	},
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},
	detailText: {
		color: 'white',
	},
	listOuterContainer: {
		alignItems: 'center',
	},
	listContainer: {
		width: '80%',
	},
})

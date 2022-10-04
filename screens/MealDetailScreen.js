import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/favorites'

import { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
// import { FavoritesContext } from '../store/context/favorites-context'

export default function MealDetailScreen({ route, navigation }) {
	// const favoriteMealsCtx = useContext(FavoritesContext)
	const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
	const dispatch = useDispatch()

	const mealId = route.params.mealId

	const selectedMeal = MEALS.find((meal) => meal.id === mealId)

	const mealIsFavorite = favoriteMealIds.includes(mealId)

	function changeFavoriteStatusHandler() {
		if (mealIsFavorite) {
			// favoriteMealsCtx.removeFavorite(mealId)
			dispatch(removeFavorite({ id: mealId }))
		} else {
			// favoriteMealsCtx.addFavorite(mealId)
			dispatch(addFavorite({ id: mealId }))
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon={mealIsFavorite ? 'star' : 'star-outline'}
						color='white'
						onPress={changeFavoriteStatusHandler}
					/>
				)
			},
		})
	}, [navigation, changeFavoriteStatusHandler])

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

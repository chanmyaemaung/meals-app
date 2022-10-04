import { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MealItem from '../components/MealItem'
import { MEALS, CATEGORIES } from '../data/dummy-data'

export default function MealsOverviewScreen({ route, navigation }) {
	const catId = route.params.categoryId

	const displayMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0
	})

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === catId
		).title

		navigation.setOptions({
			title: categoryTitle,
		})
	}, [catId, navigation])

	function renderMealItem(itemData) {
		const item = itemData.item

		const mealItemProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
		}

		return <MealItem {...mealItemProps} />
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
})

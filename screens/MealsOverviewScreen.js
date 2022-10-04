import { useLayoutEffect } from 'react'
import MealList from '../components/MealList/MealList'
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

	return <MealList items={displayMeals} />
}

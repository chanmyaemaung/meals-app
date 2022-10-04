import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem'

export default function MealList({ items }) {
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
				data={items}
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

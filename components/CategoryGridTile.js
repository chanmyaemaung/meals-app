import { Pressable, StyleSheet, Text, View, Platform } from 'react-native'

export default function CategoryGridTile({ title, color, onPress }) {
	return (
		<View style={styles.girdItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
				onPress={onPress}
			>
				<View style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	girdItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		elevation: 4,
		backgroundColor: 'white',

		// Shadow for iOS
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,

		overflow: Platform.select({ ios: 'visible', android: 'hidden' }),
	},
	button: { flex: 1 },
	// For iOS
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		justifyContent: 'center',
		borderRadius: 8,
		padding: 16,
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Subtitle({ children }) {
	return (
		<View style={styles.subTitleContainer}>
			<Text style={styles.subTitle}>{children}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	subTitleContainer: {
		padding: 6,
		borderBottomColor: '#e2b497',
		borderBottomWidth: 2,
		marginHorizontal: 12,
	},
	subTitle: {
		color: '#e2b497',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})

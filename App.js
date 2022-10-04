import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import CategoryScreen from './screens/CategoryScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Provider } from 'react-redux'

import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons'
import { store } from './store/redux/store'
// import FavoritesContextProvider from './store/context/favorites-context'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerTitleAlign: 'center',
				headerStyle: { backgroundColor: '#351401' },
				headerTintColor: '#fff',
				sceneContainerStyle: { backgroundColor: '#3f2f25' },
				drawerContentStyle: { backgroundColor: '#351401' },
				drawerActiveTintColor: '#e4baa1',
				drawerActiveBackgroundColor: '#3f2f25',
				drawerInactiveTintColor: '#fff',
			}}
		>
			<Drawer.Screen
				name='Categories'
				component={CategoryScreen}
				options={{
					title: 'All Categories',
					drawerIcon: ({ color, size }) => (
						<Ionicons name='list' color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name='Favorites'
				component={FavoritesScreen}
				options={{
					title: 'Favorites Meal',
					drawerIcon: ({ color, size }) => (
						<Ionicons name='star' color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	)
}

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			{/* <FavoritesContextProvider> */}
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName='MealsCategories'
						screenOptions={{
							headerTitleAlign: 'center',
							headerStyle: { backgroundColor: '#351401' },
							headerTintColor: '#fff',
							contentStyle: { backgroundColor: '#3f2f25' },
						}}
					>
						<Stack.Screen
							name='Drawer'
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='MealsOverview'
							component={MealsOverviewScreen}
						/>

						<Stack.Screen
							name='MealDetail'
							component={MealDetailScreen}
							options={{
								title: 'About the Meal',
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
			{/* </FavoritesContextProvider> */}
		</>
	)
}

import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens"
import Stargazers from "../screens/Stargazers"
import { BackButton } from "../components/BackButton"
import Profile from "../screens/Profile"
import { colors } from "../theme"

const Stack = createNativeStackNavigator()

function MainNavigator() {
	return (
		<Stack.Navigator
			screenOptions={
				{
					// headerShown: false,
					// headerLeft: () =>
					// 	Platform.OS === "ios" && <BackButton />,
				}
			}
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="Stargazers"
				component={Stargazers}
				options={() => {
					return {
						presentation: "modal",
						gestureEnabled: false,
						headerStyle: {
							backgroundColor: colors.palette.primary,
						},
						headerTintColor: colors.palette.black,
						headerTitleStyle: {
							fontWeight: "bold",
						},
						headerTransparent: true,
						// eslint-disable-next-line react/no-unstable-nested-components
						headerRight: () => <BackButton />,
					}
				}}
			/>
		</Stack.Navigator>
	)
}

export default MainNavigator

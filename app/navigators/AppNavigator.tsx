import React from "react"
import { StatusBar, useColorScheme } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import { NavigationContainer } from "@react-navigation/native"
import MainNavigator from "./MainNavigator"

export function AppNavigator() {
	const isDarkMode = useColorScheme() === "dark"

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	}

	return (
		<NavigationContainer>
			<StatusBar
				barStyle={
					isDarkMode ? "light-content" : "dark-content"
				}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<MainNavigator />
		</NavigationContainer>
	)
}

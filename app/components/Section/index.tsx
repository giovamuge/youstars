/* eslint-disable react/react-in-jsx-scope */
import { PropsWithChildren } from "react"
import { useColorScheme, View, Text } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import { styles } from "./style"

type SectionProps = PropsWithChildren<{
	title: string
}>

function Section({
	children,
	title,
}: SectionProps): React.JSX.Element {
	const isDarkMode = useColorScheme() === "dark"
	return (
		<View style={styles.sectionContainer}>
			<Text
				style={[
					styles.sectionTitle,
					{
						color: isDarkMode
							? Colors.white
							: Colors.black,
					},
				]}
			>
				{title}
			</Text>
			<View style={[styles.sectionDescription]}>
				{children}
			</View>
		</View>
	)
}

export { Section }

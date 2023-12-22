import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		columnGap: 10,
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: 30,
		height: "100%",
		paddingBottom: 50,
	},
	avatarContainer: {
		marginBottom: 15,
	},
	additionalContainer: {
		flexDirection: "row",
		justifyContent: "center",
		flexWrap: "wrap",
		gap: 5,
	},
	title: {
		textAlign: "center",
		marginBottom: 7,
	},
})

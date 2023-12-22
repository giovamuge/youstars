import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	highlight: {
		fontWeight: "700",
	},
	textTitle: { marginBottom: 15 },
	textInput: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		width: "100%",
		paddingHorizontal: 10,
	},
	sectionChild: {
		flexDirection: "column",
		display: "flex",
		minWidth: "100%",
		gap: 10,
	},
	containerInput: { flexDirection: "column", gap: 7 },
	container: {
		height: "100%",
		width: "100%",
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	textAlternative: {
		textAlign: "center",
		width: "100%",
		marginBottom: 15,
	},
})

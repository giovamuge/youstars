import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 15,
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	buttonContainer: {
		flexDirection: "row",
		gap: 5,
		alignItems: "center",
	},
	subContainer: { flex: 1 },
})

import { StyleSheet } from "react-native"
import { colors } from "../../theme"

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.palette.primary,
		width: "100%",
		height: "100%",
		paddingTop: 50,
	},
	title: {
		fontSize: 25,
		fontWeight: "700",
		marginVertical: 15,
		marginHorizontal: 10,
	},
	loading: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	footerText: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
	},
	emptyText: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	itemContainer: {
		flexDirection: "column",
		display: "flex",
		paddingHorizontal: 10,
		paddingVertical: 20,
		alignItems: "center",
		gap: 10,
	},
	itemImage: { width: 50, height: 50 },
})

import { StyleSheet } from "react-native"
import { colors } from "../../theme"

export const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
		borderWidth: 3,
		borderColor: colors.palette.black,
		shadowColor: colors.palette.primary,
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 1,
		shadowRadius: 0,
		paddingVertical: 15,
		backgroundColor: colors.palette.grey100,
	},
	sectionTitle: {
		fontSize: 15,
		fontWeight: "600",
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 12,
		fontWeight: "400",
	},
})

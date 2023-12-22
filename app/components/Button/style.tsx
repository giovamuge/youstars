import { StyleSheet } from "react-native"
import { colors, spacing } from "../../theme"

const styles = StyleSheet.create({
	button: {
		borderWidth: 3,
		borderColor: colors.palette.black,
		alignSelf: "flex-start",
		width: "100%",
	},
	buttonDisable: {
		backgroundColor: colors.palette.grey200,
		borderColor: colors.palette.grey500,
	},
	text: {
		marginHorizontal: spacing.huge,
		marginVertical: spacing.small,
		fontWeight: "bold",
		fontSize: 15, // TODO: define font size
		textAlign: "center",
	},
	buttonDisableText: {
		color: colors.palette.grey500,
	},
	buttonBackgroundAnimated: {
		backgroundColor: colors.palette.primary,
		width: "100%",
		height: "100%",
		position: "absolute",
		zIndex: -99,
	},
})

export default styles

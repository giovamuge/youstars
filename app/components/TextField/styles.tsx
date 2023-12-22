import { StyleSheet } from "react-native"
import { colors } from "../../theme"

const styles = StyleSheet.create({
	containerView: { width: "100%", marginBottom: 20 },
	inputView: {
		width: "100%",
		backgroundColor: colors.palette.primary,
		justifyContent: "center",
		marginBottom: 5,
	},
	inputText: {
		height: 50,
		width: "100%",
		color: colors.text,
	},
	secondInputView: {
		width: "100%",
		backgroundColor: colors.palette.white,
		height: 50,
		padding: 20,
		justifyContent: "center",
		borderColor: colors.palette.black,
		borderWidth: 3,
	},
	requiredText: {
		fontSize: 13,
		lineHeight: 15.6,
		fontWeight: "500",
		marginLeft: 15,
	},
})

export default styles

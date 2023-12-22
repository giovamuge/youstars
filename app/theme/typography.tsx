// import { Platform, StyleSheet } from "react-native"

import { StyleSheet } from "react-native"
import { colors } from "./colors"

const fonts = {
	// TODO: Add fonts
}

export const typography = {
	fonts,
	// TODO: Add different font style
}
export const textShadowStyle = {
	// textDecorationColor: colors.palette.primary,
	// textDecorationStyle: "solid",
	// textDecorationLine: "underline",
	shadowColor: colors.palette.primary,
	shadowOffset: { width: 3, height: 3 },
	shadowRadius: 0,
	shadowOpacity: 1,
}

export const typographyStyle = StyleSheet.create({
	title: {
		// TODO: add font family
		fontSize: 50,
		lineHeight: 50,
		fontWeight: "bold",
		flexWrap: "wrap",
		...textShadowStyle,
	},
	text1: {
		fontWeight: "500",
		fontSize: 25,
		lineHeight: 30,
		...textShadowStyle,
	},
	text2: {
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 20,
		lineHeight: 24,
		...textShadowStyle,
	},
	text2Bold: {
		fontSize: 20,
		fontWeight: "700",
		lineHeight: 24,
		...textShadowStyle,
	},
	text3: {
		fontSize: 13,
		fontWeight: "500",
		lineHeight: 15.6,
		...textShadowStyle,
	},
	text3Bold: {
		fontSize: 13,
		fontWeight: "700",
		lineHeight: 15.6,
		...textShadowStyle,
	},
	textHeader: {
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: 36,
		lineHeight: 40,
		letterSpacing: 0.1,
		...textShadowStyle,
	},
	headline2: {
		fontStyle: "normal",
		fontWeight: "700",
		fontSize: 26,
		lineHeight: 31,
		...textShadowStyle,
	},
})

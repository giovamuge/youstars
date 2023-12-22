import React from "react"
import { Image, StyleSheet } from "react-native"
import { colors } from "../../theme"

type Props = {
	uri: string
	size: number
}

export function Avatar({ uri, size = 50 }: Props): JSX.Element {
	return (
		<Image
			source={{ uri }}
			style={[
				style.image,
				{ width: size, height: size, borderRadius: size / 2 },
			]}
		/>
	)
}

const style = StyleSheet.create({
	image: {
		borderColor: colors.palette.black,
		borderWidth: 3,
		justifyContent: "center",
		alignItems: "center",
		objectFit: "cover",
	},
})

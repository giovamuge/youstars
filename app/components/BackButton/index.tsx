import {
	NavigationProp,
	useNavigation,
} from "@react-navigation/native"
import React, { PropsWithChildren } from "react"
import { Pressable, Text } from "react-native"

type Props = PropsWithChildren<{}>

export function BackButton({ children }: Props): JSX.Element {
	const navigation = useNavigation<NavigationProp<any, any>>()
	return (
		<Pressable onPress={() => navigation.goBack()}>
			{children ? children : <Text>Back</Text>}
		</Pressable>
	)
}

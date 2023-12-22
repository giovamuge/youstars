import React, { PropsWithChildren, useRef } from "react"
import { Animated, Easing, Pressable, Text, View } from "react-native"
import styles from "./style"

type Props = PropsWithChildren<{
	title: string
	disabled?: boolean
	onPress: () => void
	passedClass?: object
}>

export function Button({
	title,
	disabled,
	onPress,
	passedClass,
}: Props): JSX.Element {
	const marginAnimated = useRef(new Animated.Value(7)).current

	function animateInMarginBottom() {
		Animated.timing(marginAnimated, {
			toValue: 0,
			duration: 300,
			useNativeDriver: false,
			easing: Easing.cubic,
		}).start()
	}

	function animateOutMarginBottom() {
		Animated.timing(marginAnimated, {
			toValue: 7,
			duration: 300,
			useNativeDriver: false,
			easing: Easing.cubic,
		}).start()
	}

	return (
		<Pressable
			disabled={disabled}
			onPress={onPress}
			onPressIn={animateInMarginBottom}
			onPressOut={animateOutMarginBottom}
		>
			<View
				style={[
					styles.button,
					passedClass,
					disabled && styles.buttonDisable,
				]}
			>
				<Text
					style={[
						styles.text,
						disabled && styles.buttonDisableText,
					]}
				>
					{title}
				</Text>
			</View>
			<Animated.View
				style={[
					!disabled && styles.buttonBackgroundAnimated,
					{
						marginLeft: marginAnimated,
						marginTop: marginAnimated,
					},
				]}
			/>
		</Pressable>
	)
}

import React, { useRef } from "react"
import { Animated, Easing, Text, TextInput, View } from "react-native"
import { colors } from "../../theme"
import styles from "./styles"
import TextFieldProps from "./types"

export function TextField({
	onChangeText,
	placeholder,
	secureTextEntry = false,
	autoCapitalize,
	required = false,
	autoCorrect = true,
	value,
}: TextFieldProps): JSX.Element {
	const marginBottomAnimated = useRef(new Animated.Value(0)).current

	function animateInMarginBottom() {
		Animated.timing(marginBottomAnimated, {
			toValue: 10,
			duration: 300,
			useNativeDriver: false,
			easing: Easing.cubic,
		}).start()
	}

	function animateOutMarginBottom() {
		Animated.timing(marginBottomAnimated, {
			toValue: 0,
			duration: 300,
			useNativeDriver: false,
			easing: Easing.cubic,
		}).start()
	}
	return (
		<View style={styles.containerView}>
			<View style={styles.inputView}>
				<Animated.View
					style={{
						...styles.secondInputView,
						marginBottom: marginBottomAnimated,
					}}
				>
					<TextInput
						secureTextEntry={secureTextEntry}
						style={styles.inputText}
						placeholder={placeholder}
						placeholderTextColor={
							colors.palette.secondaryDarkGrey
						}
						value={value}
						onChangeText={onChangeText}
						selectionColor={colors.palette.primary}
						autoCorrect={autoCorrect}
						autoCapitalize={autoCapitalize}
						onFocus={animateInMarginBottom}
						onBlur={animateOutMarginBottom}
					/>
				</Animated.View>
			</View>

			{required ? (
				<Text style={styles.requiredText}>*required</Text>
			) : (
				<></>
			)}
		</View>
	)
}

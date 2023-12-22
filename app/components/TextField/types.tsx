interface TextFieldProps {
	onChangeText: (e: string) => void
	placeholder?: string
	secureTextEntry?: boolean
	autoCapitalize?:
		| "none"
		| "sentences"
		| "words"
		| "characters"
		| undefined
	required?: boolean
	autoCorrect?: boolean
	// onValidate?: () => boolean;
	validate?: boolean
	value?: string
}

export default TextFieldProps

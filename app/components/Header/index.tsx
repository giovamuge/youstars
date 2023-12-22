import React, { Text, View } from "react-native"
import { BackButton } from "../BackButton"
import { typographyStyle } from "../../theme/typography"
import { style } from "./style"

type Props = {
	backTitle?: string
	title?: string
}

export function Header({ backTitle, title }: Props): JSX.Element {
	return (
		<View style={style.container}>
			<View style={style.subContainer}>
				<BackButton>
					<View style={style.buttonContainer}>
						<Text style={typographyStyle.text1}>
							&#x003c;
						</Text>

						<Text style={typographyStyle.text2Bold}>
							{backTitle}
						</Text>
					</View>
				</BackButton>
			</View>
			<View style={style.subContainer}>
				<Text>
					<Text>{title}</Text>
				</Text>
			</View>
			<View style={style.subContainer} />
		</View>
	)
}

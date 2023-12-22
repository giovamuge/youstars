import React, { useState } from "react"
import { ScrollView, Text, View, useColorScheme } from "react-native"
import { styles } from "./style"
import { colors } from "../../theme"
import { TextField } from "../../components/TextField"
import { typographyStyle } from "../../theme/typography"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components"

function Home({ navigation }: any): JSX.Element {
	const [owner, setOwner] = useState("")
	const [repo, setRepo] = useState("")
	const [repoUrl, setRepoUrl] = useState("")

	const isDarkMode = useColorScheme() === "dark"

	// regex to validate github url
	const githubUrlRegex =
		/^https:\/\/github.com\/([\w-]+?)\/([\w-]+?)$/s

	const searchStars = async () => {
		const matched = repoUrl.match(githubUrlRegex)

		navigation.navigate({
			name: "Stargazers",
			params: {
				owner: matched ? matched[1] : owner,
				repo: matched ? matched[2] : repo,
			},
		})
	}

	const githubUrlValidation = (url: string) => {
		return githubUrlRegex.test(url)
	}

	return (
		<SafeAreaView
			style={[
				{
					// TODO: remove dark mode
					backgroundColor: isDarkMode
						? colors.palette.black
						: colors.palette.white,
				},
			]}
		>
			<ScrollView style={styles.container}>
				<Text
					style={[typographyStyle.title, styles.textTitle]}
				>
					Wich stars would you know?
				</Text>

				<View style={styles.containerInput}>
					<Text style={typographyStyle.text2Bold}>
						Onwer
					</Text>

					<TextField
						placeholder="meta"
						onChangeText={value => {
							setOwner(value)
							setRepoUrl("")
						}}
						value={owner}
						autoCapitalize="none"
						autoCorrect={false}
					/>
				</View>
				<View style={styles.containerInput}>
					<Text style={typographyStyle.text2Bold}>
						Repository
					</Text>

					<TextField
						placeholder="react-native"
						onChangeText={value => {
							setRepo(value)
							setRepoUrl("")
						}}
						value={repo}
						autoCorrect={false}
						autoCapitalize="none"
					/>
				</View>

				<Text
					style={[
						typographyStyle.text3,
						styles.textAlternative,
					]}
				>
					alternatively
				</Text>

				<View style={styles.containerInput}>
					<Text style={typographyStyle.text2Bold}>
						Url repository
					</Text>

					<TextField
						placeholder="http://github.com/meta/react-native"
						onChangeText={value => {
							setRepoUrl(value)
							setOwner("")
							setRepo("")
						}}
						value={repoUrl}
						autoCorrect={false}
						autoCapitalize="none"
					/>
				</View>
				<Button
					title="Search"
					onPress={searchStars}
					disabled={
						(!owner || !repo) &&
						(!repoUrl || !githubUrlValidation(repoUrl))
					}
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export { Home }

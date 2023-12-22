import React, { useEffect, useState } from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { User } from "../../models/user"
import { get } from "../../api/github/profile/get/index"
import { Avatar, Section } from "../../components"
import { typographyStyle } from "../../theme/typography"
import { Header } from "../../components/Header"
import { styles } from "./style"

function Profile({
	// navigation,
	route,
}: {
	navigation: any
	route: any
}): JSX.Element {
	const { owner } = route.params
	const [profile, setProfile] = useState<User>()

	const getProfile = async () => {
		try {
			const user = await get(owner)
			console.log("profile: ", user)
			setProfile(() => user)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getProfile()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const renderSection = (value: string, title: string) => {
		return (
			value && (
				<Section title={title}>
					<Text style={typographyStyle.text3}>{value}</Text>
				</Section>
			)
		)
	}

	return (
		<SafeAreaView>
			<Header backTitle="home" />
			<ScrollView>
				{profile ? (
					<View style={styles.container}>
						<View style={styles.avatarContainer}>
							{profile.avatar_url && (
								<Avatar
									size={100}
									uri={profile.avatar_url ?? ""}
								/>
							)}
						</View>

						<Text
							style={[
								typographyStyle.title,
								styles.title,
							]}
						>
							{profile.name}
						</Text>

						<Text style={typographyStyle.text2Bold}>
							{profile.login}
						</Text>

						<View style={styles.additionalContainer}>
							{renderSection(profile.bio, "Bio")}
							{renderSection(profile.email, "Email")}
							{renderSection(profile.blog, "Blog")}
							{renderSection(
								profile.location,
								"Location",
							)}
							{renderSection(
								profile.company,
								"Company",
							)}
							{renderSection(
								profile.twitter_username,
								"Twitter",
							)}
							{renderSection(
								profile.followers.toString(),
								"Followers",
							)}
							{renderSection(
								profile.following.toString(),
								"Following",
							)}

							{
								// TODD: implement repos list in profile
							}
						</View>
					</View>
				) : (
					<Text style={typographyStyle.title}>
						Loading...
					</Text>
				)}
			</ScrollView>
		</SafeAreaView>
	)
}

export default Profile

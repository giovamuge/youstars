import React, {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import { User } from "../../models/user"
import { useState } from "react"
import { get } from "../../api/github/stars/get"
import { StarResponse } from "../../api/github/stars/get/type"
import { styles } from "./style"
import GridList from "../../components/GridList"
import { Avatar } from "../../components"
import { typographyStyle } from "../../theme/typography"

export function Stargazers({
	route,
	navigation,
}: {
	route: any
	navigation: any
}): JSX.Element {
	const { owner, repo } = route.params
	const [users, setUsers] = useState<User[]>([])
	const [page, setPage] = useState(1)
	const [moreLoading, setMoreLoading] = useState(false)
	const [isListEnd, setIsListEnd] = useState(false)

	const getStars = async () => {
		try {
			console.log("page:", page)
			const stars = await get(owner, repo, {
				page: page,
				perPage: 10,
				sort: "stars",
				order: "desc",
			})

			setMoreLoading(false)

			if (stars.length === 0) {
				setIsListEnd(true)
			}

			setUsers(current => [
				...current,
				...stars.map((star: StarResponse) => star.user),
			])
		} catch (error) {
			setMoreLoading(false)
			setIsListEnd(true)
			console.log(error)
		}
	}

	const fetchMoreData = async () => {
		console.log("fetchMoreData")
		if (!isListEnd && !moreLoading) {
			setMoreLoading(true)
			setPage(page + 1)
			await getStars()
		}
	}

	const renderFooter = () => (
		<View style={styles.footerText}>
			{moreLoading && <ActivityIndicator />}
			{isListEnd && users.length > 0 && (
				<Text style={typographyStyle.text3Bold}>
					No more stars
				</Text>
			)}
		</View>
	)

	const renderEmpty = () => (
		<View style={styles.footerText}>
			<Text style={typographyStyle.text3Bold}>
				There are no stars in the set parameters
			</Text>
		</View>
	)

	const onPressItem = (user: User) => {
		navigation.goBack()
		setTimeout(
			() =>
				navigation.navigate("Profile", { owner: user.login }),
			500,
		)
	}

	const renderItem = (user: User) => {
		return (
			<TouchableOpacity onPress={() => onPressItem(user)}>
				<View style={styles.itemContainer}>
					<Avatar uri={user.avatar_url} size={100} />
					<Text style={typographyStyle.text2Bold}>
						{user.login}
					</Text>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<View style={styles.container}>
			<GridList
				data={users}
				columns={2}
				renderItem={({ item }) => renderItem(item)}
				ListEmptyComponent={renderEmpty}
				ListFooterComponent={renderFooter}
				onEndReachedThreshold={0.2}
				onEndReached={fetchMoreData}
			/>
		</View>
	)
}

export default Stargazers

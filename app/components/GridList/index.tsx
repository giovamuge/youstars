import React from "react"
import { FlatList, View } from "react-native"
import { styles } from "./style"

type Props = {
	data: ArrayLike<any> | null | undefined
	columns: number
	ListEmptyComponent?: () => JSX.Element
	ListFooterComponent?: () => JSX.Element
	onEndReachedThreshold?: number
	onEndReached?: () => void
	renderItem: ({
		item,
		index,
	}: {
		item: any
		index: number
	}) => JSX.Element
}

/**
 * Render a list of items in a grid settings column with FlatList
 */
export function GridList({
	data,
	renderItem,
	columns = 1,
	ListEmptyComponent,
	ListFooterComponent,
	onEndReachedThreshold,
	onEndReached,
}: Props): JSX.Element {
	let myDataWrapped: any = []

	if (data && Array.isArray(data)) {
		for (let j = 0; j < data.length; j += columns) {
			const row = data.slice(j, j + columns)
			myDataWrapped.push(row)
		}
	}

	const customRenderItem = (item: any, index: number) => {
		const flex = item.length > 0 ? item.length : 1
		return (
			<View key={index} style={[styles.container, { flex }]}>
				{item &&
					item.length > 0 &&
					item.map((subItem: any, subIndex: number) => (
						<View
							style={styles.itemContainer}
							key={subIndex}
						>
							{renderItem({
								item: subItem,
								index: subIndex,
							})}
						</View>
					))}
			</View>
		)
	}

	return (
		<FlatList
			data={myDataWrapped}
			renderItem={listWrapped =>
				customRenderItem(listWrapped.item, listWrapped.index)
			}
			ListEmptyComponent={ListEmptyComponent}
			ListFooterComponent={ListFooterComponent}
			onEndReachedThreshold={onEndReachedThreshold}
			onEndReached={onEndReached}
		/>
	)
}

export default GridList

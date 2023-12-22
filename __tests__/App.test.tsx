/**
 * @format
 */

import "react-native"
import React from "react"

// Note: import explicitly to use the types shipped with jest.
import { it } from "@jest/globals"

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"
import { Home, Stargazers } from "../app/screens"
import { GridList } from "../app/components"
import { Text } from "react-native"
import Profile from "../app/screens/Profile"

const navigation = {
	//@ts-ignore
	navigate: jest.fn(),
}

it("renders Home page", () => {
	const props = { navigation }
	const tree = renderer.create(<Home {...props} />).toJSON()
	//@ts-ignore
	expect(tree).toMatchSnapshot()
})

it("renders StarGazers page", () => {
	const props = {
		route: {
			params: { owner: "giovamuge", repo: "stadio-visione-3d" },
		},
		navigation,
	}
	const tree = renderer.create(<Stargazers {...props} />).toJSON()
	//@ts-ignore
	expect(tree).toMatchSnapshot()
})

it("renders GridList component", () => {
	const data = [{ name: "test 1" }, { name: "test 2" }]
	const tree = renderer
		.create(
			<GridList
				columns={2}
				data={data}
				renderItem={({ item }) => {
					return <Text>{item.name}</Text>
				}}
			/>,
		)
		.toJSON()
	//@ts-ignore
	expect(tree).toMatchSnapshot()
})

it("renders Profile page", () => {
	const props = {
		route: {
			params: { owner: "giovamuge" },
		},
		navigation,
	}
	const tree = renderer.create(<Profile {...props} />).toJSON()
	//@ts-ignore
	expect(tree).toMatchSnapshot()
})

import { User } from "../../../../models/User"

/**
 *
 * @param url User name's owner
 * @returns {Promise<any>} Response
 */

async function get(owner: string): Promise<User> {
	const url = `https://api.github.com/users/${owner}`
	console.log("url: ", url)
	const response = await fetch(url, options())

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

function options() {
	return {
		method: "GET",
		headers: {
			Accept: "Accept: application/vnd.github+json",
		},
	}
}

export { get }

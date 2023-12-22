import { Additional, StarResponse } from "./type"

/**
 *
 * @param owner User name's owner
 * @param repo Repository name
 * @param additional Additional parameters (perPage, page, sort, order)
 * @returns {Promise<any>} Response
 */

async function get(
	owner: string,
	repo: string,
	additional: Additional = {
		perPage: 10,
		page: 0,
		sort: "stars",
		order: "desc",
	},
): Promise<StarResponse[]> {
	const url = `https://api.github.com/repos/${owner}/${repo}/stargazers?per_page=${additional.perPage}&page=${additional.page}&sort=${additional.sort}&order=${additional.order}`
	console.log(url)
	const response = await fetch(url, options())

	// TODO: use mock to reduce API calls

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

function options() {
	return {
		method: "GET",
		headers: {
			Accept: "application/vnd.github.v3.star+json",
		},
	}
}

export { get }

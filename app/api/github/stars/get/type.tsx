import { User } from "../../../../models/user"

export type Additional = {
	perPage: number
	page: number
	sort: "created" | "updated" | "stars"
	order: "asc" | "desc"
}

// TODO: type response stars from github
export type StarResponse = {
	starred_at: string
	user: User
}

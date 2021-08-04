import { useContext } from "react"
import axios from "axios"

import { API_URL } from "../utils/constants"
import { AppContext } from "store/app-context"

export default function useHttpClient() {
	const { auth } = useContext(AppContext)

	const makeClient = () => {
		return axios.create({
			baseURL: API_URL,
			headers: {
				Authorization: `Bearer ${auth?.token || ""}`,
				"X-Requested-With": "XMLHttpRequest",
				Accept: "application/json",
			},
		})
	}

	return {
		client: makeClient(),
	}
}

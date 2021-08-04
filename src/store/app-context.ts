import React from "react"

export interface UserInterface {
	first_name: string
	last_name: string
	email: string
	phone: string
	country: string
}

export interface AuthInterface {
	isLoggedIn: boolean
	data?: UserInterface
	token?: string
}

export interface AppProvider {
	auth?: AuthInterface | null
	actions?: any
}

export const AppProviderData: AppProvider = {
	auth: null,
	actions: null,
}

export const AppContext = React.createContext(AppProviderData)

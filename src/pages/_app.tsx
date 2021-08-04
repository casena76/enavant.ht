import React, { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import PropTypes from 'prop-types'
import Head from 'next/head'
// import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// import { Router } from 'next/router'

// import theme from '../src/theme'
import { APP_NAME } from '../utils/constants'
import { AppContext, UserInterface, AppProvider, AppProviderData } from 'store/app-context'
import 'styles/react-transitions.css'
import "styles/styles.css"

export default function MyApp(props: AppProps) {
	const [appState, setAppState] = useState<AppProvider>(AppProviderData)

	const { Component, pageProps } = props

	useEffect(() => {
		if (typeof localStorage !== 'undefined') {
			const { userData, token } = JSON.parse(localStorage.getItem('authData') || "{}")

			setAppState(prevState => ({
				...prevState, auth: {
					isLoggedIn: !!token,
					data: userData,
					token
				}
			}))
		}
	}, [])

	const doLogin = (data: {
		userData: UserInterface
		token: string
	}, callback: () => void) => {
		const { userData, token } = data

		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('authData', JSON.stringify(data))
		}

		setAppState(prevState => ({
			...prevState, auth: {
				isLoggedIn: true,
				data: userData,
				token
			}
		}))

		callback()
	}

	const doLogout = (callback: () => void) => {
		localStorage.removeItem('authData')

		setAppState(prevState => ({
			...prevState, auth: {
				isLoggedIn: false,
			}
		}))

		callback()
	}

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles: any = document.querySelector('#jss-server-side')

		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<Head>
				<title>{APP_NAME}</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			{/* <ThemeProvider> */}
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<AppContext.Provider value={{
				...appState, actions: {
					doLogin,
					doLogout
				}
			}}>
				<Component {...pageProps} />
			</AppContext.Provider>
			{/* </ThemeProvider> */}
		</>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}
export const APP_NAME = `EnAvant.HT`
export const FB_APP_ID = `232624100615967`
export const TWITTER_HANDLE = `en_avant_ht`
export const SITE_EMAIL = `contact@enavant.ht`

// // Google Adsense
// export const GOOGLE_ADS_CLIENT = `ca-pub-3793163111580068`

export const DOMAIN = process.env.DOMAIN || `https://www.enavant.ht`
export const API_URL =
	process.env.NODE_ENV === "development"
		? "http://web.enavant.loc/api"
		: "https://web2.enavant.ht/api"
